/**
 * Utility function to get announcements from Pages CMS
 * Pages CMS stores announcements as Markdown (.md) files with YAML frontmatter
 * in src/_data/announcements
 */

// Using Vite's glob import to dynamically load all markdown files as raw text
const announcementModules = import.meta.glob('/src/_data/announcements/*.md', {
  eager: false,
  as: 'raw'
});

/**
 * Parse YAML frontmatter from markdown file
 * @param {string} content - Markdown file content with frontmatter
 * @returns {Object} Parsed frontmatter data and markdown content
 */
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    // No frontmatter found, return empty data
    return { data: {}, content: content.trim() };
  }
  
  const frontmatter = match[1];
  const markdownContent = match[2].trim();
  
  // Parse YAML frontmatter
  const data = {};
  const lines = frontmatter.split('\n');
  let arrayKey = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Skip empty lines and comments
    if (!trimmed || trimmed.startsWith('#')) continue;
    
    // Check if this is an array item (starts with -)
    if (trimmed.startsWith('-')) {
      if (arrayKey) {
        // Parse array item
        const itemContent = trimmed.substring(1).trim();
        
        // Handle object in array (e.g., - image: "path")
        if (itemContent.includes(':')) {
          const itemMatch = itemContent.match(/(\w+):\s*(.+)/);
          if (itemMatch) {
            const itemKey = itemMatch[1];
            let itemValue = itemMatch[2].trim();
            
            // Remove quotes
            if ((itemValue.startsWith('"') && itemValue.endsWith('"')) || 
                (itemValue.startsWith("'") && itemValue.endsWith("'"))) {
              itemValue = itemValue.slice(1, -1);
            }
            
            // Initialize array if needed
            if (!data[arrayKey]) data[arrayKey] = [];
            
            // Add object to array
            data[arrayKey].push({ [itemKey]: itemValue });
          }
        } else {
          // Simple array item
          let itemValue = itemContent;
          if ((itemValue.startsWith('"') && itemValue.endsWith('"')) || 
              (itemValue.startsWith("'") && itemValue.endsWith("'"))) {
            itemValue = itemValue.slice(1, -1);
          }
          
          if (!data[arrayKey]) data[arrayKey] = [];
          data[arrayKey].push(itemValue);
        }
      }
      continue;
    }
    
    // Check if this is a key-value pair
    const colonIndex = trimmed.indexOf(':');
    if (colonIndex === -1) continue;
    
    const key = trimmed.substring(0, colonIndex).trim();
    let value = trimmed.substring(colonIndex + 1).trim();
    
    // Check if next line starts with - (array)
    const nextLine = i + 1 < lines.length ? lines[i + 1].trim() : '';
    if (nextLine.startsWith('-')) {
      // This is an array key
      arrayKey = key;
      continue;
    } else {
      // Not an array, reset array state
      arrayKey = null;
    }
    
    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    
    // Handle inline arrays
    if (value.startsWith('[') && value.endsWith(']')) {
      try {
        data[key] = JSON.parse(value);
      } catch {
        data[key] = value;
      }
    } else {
      data[key] = value;
    }
  }
  
  // Post-process images array to extract image paths
  if (data.images && Array.isArray(data.images)) {
    data.images = data.images.map(img => {
      if (typeof img === 'object' && img.image) {
        return { image: img.image };
      }
      return img;
    });
  }
  
  return { data, content: markdownContent };
}

/**
 * Helper function to process announcement data into a consistent format
 * @param {Object} data - Raw announcement data from frontmatter
 * @param {string} filename - Filename (used as ID if no ID in data)
 * @returns {Object} Processed announcement object
 */
function processAnnouncementData(data, filename) {
  // Parse date if it's a string
  let dateValue = data.date;
  if (typeof dateValue === 'string') {
    dateValue = new Date(dateValue);
  }
  
  // Format date for display
  const formattedDate = formatDate(dateValue);
  
  // Handle images array - Pages CMS stores images as an array of objects
  let images = [];
  if (data.images && Array.isArray(data.images)) {
    images = data.images
      .map(img => {
        if (typeof img === 'string') return img;
        if (img && typeof img === 'object') {
          // Handle object with image property
          return img.image || img.url || null;
        }
        return null;
      })
      .filter(Boolean);
  } else if (data.image) {
    // Single image field
    images = [data.image];
  }
  
  // Handle rich text content - Pages CMS stores rich-text as HTML string
  // For markdown, the message is in the frontmatter
  let message = data.message || data.description || '';
  if (typeof message === 'object' && message.html) {
    message = message.html;
  }
  
  return {
    id: data.id || filename,
    title: data.title || '',
    author: data.author || '',
    date: formattedDate,
    dateObj: dateValue,
    message: message,
    link: data.link || '#',
    images: images
  };
}

/**
 * Get all announcements sorted by date (newest first)
 * @returns {Promise<Array>} Array of announcement objects
 */
export async function getAnnouncements() {
  try {
    // Get all markdown file paths
    const mdFilePaths = Object.keys(announcementModules);
    
    if (mdFilePaths.length === 0) {
      console.warn('No announcement files found in src/_data/announcements');
      return [];
    }
    
    // Load all markdown announcement files
    const announcementPromises = mdFilePaths.map(async (path) => {
      try {
        // Load the markdown file as raw text
        const rawContent = await announcementModules[path]();
        
        // Parse frontmatter
        const { data } = parseFrontmatter(rawContent);
        
        // Extract filename as ID if no ID is provided
        const filename = path.split('/').pop().replace(/\.md$/, '');
        
        // Process the announcement data
        return processAnnouncementData(data, filename);
      } catch (error) {
        console.error(`Error loading announcement from ${path}:`, error);
        return null;
      }
    });
    
    // Wait for all announcements to load
    const announcements = await Promise.all(announcementPromises);
    
    // Filter out null values and sort by date (newest first)
    return announcements
      .filter(announcement => announcement !== null && announcement.title)
      .sort((a, b) => {
        const dateA = a.dateObj || new Date(0);
        const dateB = b.dateObj || new Date(0);
        return dateB - dateA; // Newest first
      });
  } catch (error) {
    console.error('Error loading announcements:', error);
    return [];
  }
}

/**
 * Format date to readable string
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date string
 */
function formatDate(date) {
  if (!date) return '';
  
  const dateObj = date instanceof Date ? date : new Date(date);
  
  if (isNaN(dateObj.getTime())) {
    return date.toString(); // Return as-is if invalid date
  }
  
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  
  return dateObj.toLocaleDateString('en-US', options);
}

/**
 * Get a single announcement by ID
 * @param {string} id - Announcement ID
 * @returns {Promise<Object|null>} Announcement object or null
 */
export async function getAnnouncementById(id) {
  const announcements = await getAnnouncements();
  return announcements.find(announcement => announcement.id === id) || null;
}
