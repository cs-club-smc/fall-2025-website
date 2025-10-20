import csClubLogo from '../../assets/Navbar/cs-club-logo.png';

function Landing() {
    return(
        <>
            <div className='img-container'>
                <img src={csClubLogo} alt='logo' />
            </div>
            <h1>
                Computer Science Club
            </h1>
            <p>Coming soon!</p>
        </>
    )
}

export default Landing;