import background from '../assets/About/background.png'

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

       </main>
    )
}

export default About;