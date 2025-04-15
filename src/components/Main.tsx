import React, { useEffect, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="container">
      <div className={`about-section ${scrolled ? 'scrolled' : ''}`}>
        <div className="image-wrapper">
          <img 
            src={require("../assets/images/pp/avatar.png")} 
            alt="Avatar" 
            className="avatar-img"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/HunterVinic" target="_blank" rel="noreferrer">
              <GitHubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/sheshehang-limbu/" target="_blank" rel="noreferrer">
              <LinkedInIcon/>
            </a>
          </div>
          <h1>Sheshehang Limbu</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/HunterVinic" target="_blank" rel="noreferrer">
              <GitHubIcon/>
            </a>
            <a href="https://www.linkedin.com/in/sheshehang-limbu/" target="_blank" rel="noreferrer">
              <LinkedInIcon/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;