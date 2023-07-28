import React from "react";
import './Intro.css'
const Intro=()=>{
  return(  <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>
                    Hey! I Am 
                </span>
                <span>
                    Suraj Mahto
                </span>
                <span>MERN stack developer proficient in Java with a
                     strong problem-solving aptitude. Skilled tutor with 
                     three years of teaching experience. Adaptable learner and communicator
                    , seeking opportunities to contribute to tech projects and expand expertise</span>
            </div>
            
                <button className="button i-button">Hire me</button>
            
        </div>
        <div className="i-right">
            i am right side
        </div>
    </div>);
}
export default Intro;