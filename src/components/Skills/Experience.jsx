import React, { useContext } from "react";
import { themeContext } from "../../Context";
import html from "../../img/html.png";
import css from "../../img/css.png";
import js from "../../img/JS.png";
import react from "../../img/React.png";
import mongodb from "../../img/mongodb.png";
import node from "../../img/Node.png";
import express from "../../img/express.png";
import java from "../../img/java.png";

import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="i-left">
        <div className="i-name">
          <span>My skills</span>
          <span>
           <h3> I have hands-on experience with a diverse set of technologies, including MERN stack, Java programming, and web development frameworks.</h3>
          </span>
        </div>
        
        <button className="button i-button">Hire me</button>

        {/* Social icons */}
        <div className="i-icons">
          <img src={java} alt=""/>
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <br/>
          <img src={react} alt="" />
          <img src={mongodb} alt="" />
          <img src={node} alt="" />
          <img src={express} alt=""/>
        </div>
      </div>
    </div>
  );
};

export default Experience;
