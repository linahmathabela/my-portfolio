import "./about.css";
import Award from "../../img/award.png";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const About = () => {
  return (
    <div className="a">
      
      <div className="a-right ">
      <h1 className="a-title">About Me</h1>
        
        <p className="a-desc">
      

Aspiring junior frontend developer with a deep passion for crafting interactive and visually appealing web experiences. 
I am dedicated to continuously expanding my skill set and staying up-to-date with the latest trends in web development. 
With a strong foundation in HTML, CSS, JavaScript and react, I am excited to bring creative ideas to life and contribute to user-centric design. 



        </p>
        </div>

        <div className="container ">
          <div className="cube">
            <div className="face top">
              <FontAwesomeIcon icon={faSass} color="#DD0031" />
            </div>
            <div className="face bottom">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face left">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face right">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face front">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face back">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
          </div>

        </div>
      
    
  );
};

export default About;