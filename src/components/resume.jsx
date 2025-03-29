import React from "react";
import SkillsGrid from "./skills";
import { MdOutlineWork } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Resume() {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <MdOutlineWork />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Software Development Intern - <i>C-DAC Delhi</i>
            </h4>
            <span>March 2024 — Present</span>
            <p className="timeline-text">
              • <b>Business Management System:</b> Developed a full-stack web application for business operations management using Spring Boot, Thymeleaf, Bootstrap, and PostgreSQL.
              <br />• <b>Lead Management System:</b> Designed and implemented role-based access control for leads and project management using Spring Security.
              <br />• <b>Visitor Management System:</b> Built a system for tracking visitors and allocated devices, integrating Java, Spring Boot, and React.js.
              <br />• <b>Technologies Used:</b> Java, Spring Boot, PostgreSQL, Thymeleaf, Bootstrap, React.js.
            </p>
          </li>

          
        </ol>
      </section>

      <section className="skill pb-8">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          <SkillsGrid />
        </ul>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoDocumentTextOutline />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              B.Tech in Computer Science and Engineering - <i>Dr. APJ Abdul Kalam Technical University(Lucknow)</i>
            </h4>
            <span>2020 — 2024</span>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Higher Secondary Education - <i>DS Public School</i>
            </h4>
            <span>2019 — 2020</span>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Secondary Education - <i> Success International School</i>
            </h4>
            <span>2017 — 2018</span>
          </li>
        </ol>
      </section>
    </article>
  );
}
