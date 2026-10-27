import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/shauryashrma" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
        <a href="https://leetcode.com/u/shauryamightcode/" target="_blank" rel="noreferrer" aria-label="LeetCode"><CodeIcon/></a>
        <a href="mailto:shauryasharmaofficial12@gmail.com" aria-label="Email"><EmailIcon/></a>
      </div>
      <p>Designed & built by Shaurya Sharma</p>
    </footer>
  );
}

export default Footer;
