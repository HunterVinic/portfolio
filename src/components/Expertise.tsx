import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faMobile, faMicrochip, faCloud } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Flutter", "Dart", "BLoC", "SignalR", "Sqflite",
    "REST API", "JWT", "OAuth", "Azure DevOps", "OpenAPI"
];

const labelsSecond = [
    "Python", "Flask", "Docker", "LSTM", "CNN",
    "FFMpeg", "Pandas", "Scikit-learn", "TensorFlow", "Hugging Face"
];

const labelsThird = [
    "IoT", "Arduino", "Raspberry Pi", "Firebase", "NodeRed",
    "Google ML Kit", "MQTT", "BLE", "Zigbee", "LoRaWAN"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faMobile} size="3x"/>
                    <h3>Mobile App Development</h3>
                    <p>Developed production-grade Flutter applications with optimized backend infrastructure, real-time data handling, and secure authentication. Experience in refactoring large codebases and implementing complex features like distributed task scheduling.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI/ML Development</h3>
                    <p>Built speech processing systems including Thai Speech Emotion Recognition and Speech-to-Text. Trained models using LSTM and CNN architectures, with experience in deploying ML solutions via Flask and Docker.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>IoT Systems</h3>
                    <p>Developed smart home solutions integrating various IoT technologies. Experience with device installation, energy monitoring systems, and creating comprehensive IoT control dashboards with mobile app interfaces.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;