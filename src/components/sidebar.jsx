import React from "react";
import myAvatar from "../assets/avtar.jpg";
import {
  IoMailOutline,
  IoDocumentTextOutline,
  IoLocationOutline,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";

export default function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={myAvatar} alt="Ritika Chaudhary" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Ritika Chaudhary">
            Ritika Chaudhary
          </h1>

          <p className="title">Full Stack Web Developer</p>
          <a
            href="mailto:ritichaudhary112@gmail.com"
            className="text-white text-sm mt-3 lg:hidden"
          >
            ritichaudhary112@gmail.com
          </a>
        </div>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:ritichaudhary112@gmail.com" className="contact-link">
                ritichaudhary112@gmail.com
              </a>
            </div>
          </li>

          {/* Github */}
          <li className="contact-item">
            <div className="icon-box">
              <IoLogoGithub />
            </div>

            <div className="contact-info">
              <p className="contact-title">Github</p>
              <a href="https://github.com/Ritika1223" className="contact-link">
              Ritika1223
              </a>
            </div>
          </li>

          {/* Resume */}
          <li className="contact-item">
            <div className="icon-box">
              <IoDocumentTextOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Resume</p>
              <a
                href="https://drive.usercontent.google.com/download?id=1MDo2g8jTW2XMulzUqRyGWYWrrC0_gN8U&export=download&authuser=0" 
                className="contact-link"
                download="Ritika_Chaudhary_Resume"
              >
                Download Resume
              </a>
            </div>
          </li>

          {/* Location */}
          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Meerut, Uttar Pradesh, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        {/* Social Links */}
        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/ritika-chaudhary-523744272/" className="social-link">
              <IoLogoLinkedin />
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/Ritika1223" className="social-link">
              <IoLogoGithub />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
