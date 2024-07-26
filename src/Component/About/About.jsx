import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Universities are vibrant hubs of intellectual exploration, where
          students embark on transformative journeys of learning and
          self-discovery. These institutions serve as crucibles of knowledge,
          fostering critical thinking, creativity, and innovation. Within their
          sprawling campuses, students from diverse backgrounds converge to
          pursue their academic passions and shape their futures.
        </p>
        <p>
          At the heart of every university is a dynamic community of scholars,
          educators, and students committed to the pursuit of excellence.
          Professors, esteemed for their expertise and research, impart wisdom
          gained through years of scholarly inquiry, while students eagerly
          absorb knowledge, eager to challenge conventional wisdom and push the
          boundaries of human understanding.
        </p>
      </div>
    </div>
  );
};

export default About;
