import { useEffect, useRef } from 'react';

function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    let gridLines = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
      initGridLines();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 25000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          opacity: Math.random() * 0.7 + 0.3,
          pulse: Math.random() * Math.PI * 2,
          color: Math.random() > 0.5 ? '#66C48A' : '#4ECDC4'
        });
      }
    };

    const initGridLines = () => {
      gridLines = [];
      const spacing = 80;
      // Horizontal lines
      for (let y = 0; y < canvas.height + spacing; y += spacing) {
        gridLines.push({
          type: 'h',
          y: y,
          offset: Math.random() * 1000,
          speed: 0.5 + Math.random() * 0.5
        });
      }
      // Vertical lines
      for (let x = 0; x < canvas.width + spacing; x += spacing) {
        gridLines.push({
          type: 'v',
          x: x,
          offset: Math.random() * 1000,
          speed: 0.5 + Math.random() * 0.5
        });
      }
    };

    const drawBackground = (time) => {
      // Dark gradient base
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.5, 0,
        canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.8
      );
      gradient.addColorStop(0, '#0d1f35');
      gradient.addColorStop(0.5, '#0a1628');
      gradient.addColorStop(1, '#060d18');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawOrbs = (time) => {
      const orbs = [
        { x: 0.85, y: 0.15, size: 400, color: 'rgba(102, 196, 138, 0.35)', speed: 0.0003 },
        { x: 0.1, y: 0.85, size: 350, color: 'rgba(78, 205, 196, 0.35)', speed: 0.0004 },
        { x: 0.7, y: 0.7, size: 300, color: 'rgba(69, 183, 209, 0.3)', speed: 0.00035 },
        { x: 0.2, y: 0.3, size: 250, color: 'rgba(102, 196, 138, 0.25)', speed: 0.00045 },
        { x: 0.5, y: 0.5, size: 500, color: 'rgba(78, 205, 196, 0.15)', speed: 0.0002 },
      ];

      orbs.forEach((orb, i) => {
        const offsetX = Math.sin(time * orb.speed + i) * 50;
        const offsetY = Math.cos(time * orb.speed * 1.3 + i) * 50;
        const pulse = 1 + Math.sin(time * 0.001 + i) * 0.15;

        const gradient = ctx.createRadialGradient(
          orb.x * canvas.width + offsetX,
          orb.y * canvas.height + offsetY,
          0,
          orb.x * canvas.width + offsetX,
          orb.y * canvas.height + offsetY,
          orb.size * pulse
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(0.5, orb.color.replace(/[\d.]+\)$/, '0.1)'));
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
    };

    const drawGrid = (time) => {
      ctx.lineWidth = 1;

      gridLines.forEach(line => {
        const pulse = Math.sin(time * 0.002 * line.speed + line.offset) * 0.5 + 0.5;
        const opacity = 0.03 + pulse * 0.06;

        if (line.type === 'h') {
          const gradient = ctx.createLinearGradient(0, line.y, canvas.width, line.y);
          gradient.addColorStop(0, 'transparent');
          gradient.addColorStop(0.2, `rgba(102, 196, 138, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(78, 205, 196, ${opacity * 1.5})`);
          gradient.addColorStop(0.8, `rgba(102, 196, 138, ${opacity})`);
          gradient.addColorStop(1, 'transparent');
          ctx.strokeStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(0, line.y);
          ctx.lineTo(canvas.width, line.y);
          ctx.stroke();
        } else {
          const gradient = ctx.createLinearGradient(line.x, 0, line.x, canvas.height);
          gradient.addColorStop(0, 'transparent');
          gradient.addColorStop(0.2, `rgba(78, 205, 196, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(102, 196, 138, ${opacity * 1.5})`);
          gradient.addColorStop(0.8, `rgba(78, 205, 196, ${opacity})`);
          gradient.addColorStop(1, 'transparent');
          ctx.strokeStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(line.x, 0);
          ctx.lineTo(line.x, canvas.height);
          ctx.stroke();
        }
      });
    };

    const drawParticles = (time) => {
      particles.forEach(p => {
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulse += 0.02;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Pulsing glow
        const glowSize = p.size * (2 + Math.sin(p.pulse) * 0.5);
        const opacity = p.opacity * (0.7 + Math.sin(p.pulse) * 0.3);

        // Outer glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize * 4);
        gradient.addColorStop(0, p.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba'));
        gradient.addColorStop(0.5, p.color.replace(')', `, ${opacity * 0.3})`).replace('rgb', 'rgba'));
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(p.x - glowSize * 4, p.y - glowSize * 4, glowSize * 8, glowSize * 8);

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });
    };

    const drawConnections = () => {
      const maxDist = 120;
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.15;
            ctx.strokeStyle = `rgba(102, 196, 138, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawScanline = (time) => {
      const y = (time * 0.05) % (canvas.height + 100) - 50;
      const gradient = ctx.createLinearGradient(0, y - 50, 0, y + 50);
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(0.5, 'rgba(102, 196, 138, 0.03)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, y - 50, canvas.width, 100);
    };

    const animate = (time) => {
      drawBackground(time);
      drawOrbs(time);
      drawGrid(time);
      drawConnections();
      drawParticles(time);
      drawScanline(time);
      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        pointerEvents: 'none'
      }}
    />
  );
}

export default AnimatedBackground;
