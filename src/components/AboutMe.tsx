import React from 'react';
import backgroundImage from '../assets/images/pp/aboutme_bg.png';

const AboutMe = () => {
  return (
    <section 
      className="about-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '600px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
      }}
    >
      <div className="content-container">
        <div className="content">
          <h1>About Me</h1>
        
          <p>
          As a forward-thinking Computer & Software Engineer, I specialize in architecting seamless digital experiences through Flutter development, IoT ecosystems, and AI-driven innovation. With a Master’s in IoT System Engineering in progress, I merge theoretical rigor with hands-on expertise to solve complex problems, delivering scalable solutions that bridge the gap between cutting-edge technology and human-centric design.
          </p>
          
          <div className="education-section">
            <h2 className="education-title">Education</h2>
            <h4 className="education-title">B.Sc. Computer Engineering      VME, Assumption University, Thailand </h4>
            <h4 className="education-title">M.Sc. IoT System Engineering     Asian Institute of Technology, Thailand</h4>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;