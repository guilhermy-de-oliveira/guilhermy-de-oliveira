import './AboutMe.css'
import profileIcon from "../assets/profileIcon.png"

function AboutMe() {
  return (
    <div className="profile">
      <img className="profile-icon" src={profileIcon} alt="profileIcon" />
      <div>
        <p className='txt-name'>Guilhermy de Oliveira</p>
        <p className='txt-alias'>(Invalid Block)</p>
        <br />
        <p className='txt-cargo'>High-School Student - Aspirant Software Engineer</p>
      </div>
    </div>
  )
}

export default AboutMe