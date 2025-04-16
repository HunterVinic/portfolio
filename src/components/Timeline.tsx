import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faMobile, faRobot, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="Apr 2025 - Ongoing"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faMobile} />}
          >
            <h3 className="vertical-timeline-element-title">Flutter Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">State Trading Organization Plc, Maldives</h4>
            <ul>
              <li>Designed and developed Flutter applications aligned with business requirements</li>
              <li>Implemented new features and maintained existing projects with best practices</li>
              <li>Collaborated with backend engineers and UI/UX designers for seamless integration</li>
              <li>Applied security measures to ensure data protection and product readiness</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2024 - Mar 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faMobile} />}
          >
            <h3 className="vertical-timeline-element-title">Mobile App Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Raytail, Thailand</h4>
            <ul>
              <li>Developed robust backend infrastructure with optimized server sync</li>
              <li>Implemented OTP authentication and real-time updates with SignalR</li>
              <li>Refactored 5,000+ lines to BLoC for modularity and scalability</li>
              <li>Designed distributed cron-based task scheduler with sharding</li>
              <li>Ensured secure authentication with JWT, OAuth, and REST API</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2023 - Oct 2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faRobot} />}
          >
            <h3 className="vertical-timeline-element-title">AI/ML Programmer Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">TGS Enterprise Network Limited, Thailand</h4>
            <ul>
              <li>Developed Thai Speech Emotion Recognition, Speech-to-Text, and Text-to-Speech systems</li>
              <li>Trained models using LSTM, CNN with 17,600+ Thai audio files</li>
              <li>Deployed solutions via Flask and Docker</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2023 - Sep 2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faMicrochip} />}
          >
            <h3 className="vertical-timeline-element-title">IoT Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">PCS Security and Facility Services Limited, Thailand</h4>
            <ul>
              <li>Assisted in surveying and installing IoT devices at multiple sites</li>
              <li>Managed energy projects and provided troubleshooting</li>
              <li>Supported site managers with Head Mounted Tablets</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;