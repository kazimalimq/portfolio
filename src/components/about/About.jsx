import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container ">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="me-about" />
          </div>
        </div>
        <div className="about__content ">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
            distinctio consequuntur et vel, ab illum facere maxime quo sequi
            pariatur sapiente deserunt, ipsa iste autem error provident nam
            natus fugiat.
          </p>
          <a href="#contact" className="btn btn-primary"> Want to know more?</a>
        </div>
      </div>
    </section>
  );
};

export default About;
