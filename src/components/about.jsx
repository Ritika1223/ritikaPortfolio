import React from "react";

export default function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">I'm Ritika Chaudhary!</h2>
      </header>

      <section className="about-text">
        <p>
          Web Application Developer with 1 year of experience leading the creation of complex, user-focused web applications at the highest level of quality and efficiency. Skilled in research, designing, developing, and testing multiple web applications in React.js, JavaScript, and Java. Good knowledge of Algorithms and Data Structures.
        </p>

        <p>
          Passionate about building efficient, scalable, and user-friendly applications. I have experience in full-stack development using Spring Boot for backend services and React.js for front-end development. I thrive on solving technical challenges and continuously learning new technologies.
        </p>

        <p>
          Apart from coding, I enjoy exploring new tools, collaborating on innovative projects, and contributing to the developer community. My goal is to leverage my skills to create impactful software solutions that empower users and enhance their experiences.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <span className="material-icons text-white" style={{ fontSize: "40px" }}>web</span>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Development (React & Thymeleaf)</h4>
              <p className="service-item-text">
                Developing dynamic and scalable web applications using React.js and Thymeleaf for a seamless and responsive UI experience.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <span className="material-icons text-white" style={{ fontSize: "40px" }}>code</span>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Backend Development (Spring Boot & REST APIs)</h4>
              <p className="service-item-text">
                Building powerful backend services using Spring Boot, REST APIs, and JPA/Hibernate for efficient and scalable applications.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <span className="material-icons text-white" style={{ fontSize: "40px" }}>storage</span>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Database Management (PostgreSQL / MySQL)</h4>
              <p className="service-item-text">
                Managing and optimizing relational databases using PostgreSQL and MySQL to ensure seamless data retrieval and storage.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <span className="material-icons text-white" style={{ fontSize: "40px" }}>settings</span>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Software Development & System Design</h4>
              <p className="service-item-text">
                Designing and developing software systems with best practices in modularity, scalability, and maintainability.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
}
