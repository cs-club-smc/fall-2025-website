import background from '../assets/About/background.png'
import meeting from '../assets/About/meeting.png'
import logo from '../assets/About/logo.jpg'


function About() {
    return(
       <main
        style={{
            minHeight: '100vh',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
       >
        <h1>ABOUT US</h1>

        <p>Description Of the Club</p>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
         
        <p>Mission Statement </p>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p> 
          
        <p>Goals</p>  
        <p>"Lorem ipsum dolor sit amet afowaifawi aofiwafioafafaoifafoafaifbiawofbao foaifbwoaa teoaifbwaoi  </p>
         
        <p>Advisors </p>
        <p>"Lorem ipsum dolor sit amet </p>

        <p>Affiliated Organizations</p>
        <p>"Lorem ipsum dolor </p> 

        <div>
            <img 
            src={meeting} 
            alt = "CS Club meeting"
            style = {{
                width: '300px',
                height: '500px',
                borderRadius:'62px',
            }} 
            />

            <img 
            src={logo} 
            alt = "CS Club logo"
            style = {{
                width: '300px',
                height: '500px',
                borderRadius:'62px',
            }} 
            />
        </div>


       </main>
    )
}

export default About;