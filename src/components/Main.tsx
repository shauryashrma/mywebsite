import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import avatar from '../assets/images/avatar.png';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Shaurya Sharma" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/shauryashrma" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://leetcode.com/u/shauryamightcode/" target="_blank" rel="noreferrer" aria-label="LeetCode"><CodeIcon/></a>
            <a href="mailto:shauryasharmaofficial12@gmail.com" aria-label="Email"><EmailIcon/></a>
          </div>
          <h1>Shaurya Sharma</h1>
          <p>Full Stack Developer & AI Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/shauryashrma" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
            <a href="https://leetcode.com/u/shauryamightcode/" target="_blank" rel="noreferrer" aria-label="LeetCode"><CodeIcon/></a>
            <a href="mailto:shauryasharmaofficial12@gmail.com" aria-label="Email"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
