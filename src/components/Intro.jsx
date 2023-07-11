import img from "../images/vector.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";
const Intro = () => {
    return (
        <div className="Home" id= "intro"> 

          <div className="Intro-text">
            <div className="intro1">
            <h1>  Hi,</h1>
            <h1>I'm Jahnavi.</h1>
            <h4> Student || Web developer </h4>
            <span className="socialmedia">
              <InstagramIcon className="icon" 
               onClick={() => window.open("https://www.instagram.com/jahnavi__gadde", '_blank')}/>
              <GitHubIcon className="icon" 
              onClick={() => window.open("https://github.com/JahnaviGadde", '_blank')}/>
              <LinkedInIcon className="icon" 
               onClick={() => window.open("https://www.linkedin.com/in/jahnavi-gadde-028195230", '_blank')}/>
            </span>
            </div>
             <dir>
            <img src= {img} alt="" />
             </dir>
          </div>
        </div>
    );

};

export default Intro;