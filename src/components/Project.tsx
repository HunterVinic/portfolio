import React from "react";
import qr from '../assets/images/projects/qr.jpg';
import smarthouse from '../assets/images/projects/smarthouse.jpg';
import nodered from '../assets/images/projects/smarthouse_nodered.jpg';
import speech from '../assets/images/projects/thaispeech/speech.jpg';
import { FaYoutube } from "react-icons/fa";

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1 className="section-title">Personal Projects</h1>
        <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
                <div className="macbook">
                    <div className="screen">
                        <div className="screen-content">
                        <a href="https://youtu.be/9RKcvm3s-hQ?si=3gTxwy_D4K8Ej1Fl" target="_blank" rel="noreferrer" className="video-thumbnail">
                           <img src={speech} className="zoom" alt="Thai Speech Emotion Recognition" />
                                <div className="play-button">
                                   <span className="youtube-icon"></span>
                                </div>
                        </a>
                        </div>
                        <div className="notch"></div>
                    </div>
                    <div className="keyboard"></div>
                </div>
                <div className="project-content">
                    <a href="https://youtu.be/9RKcvm3s-hQ?si=3gTxwy_D4K8Ej1Fl" target="_blank" rel="noreferrer">
                        <h2>Thai Language, Speech Emotion Recognition using Machine Learning (LSTM model)</h2>
                    </a>
                    <p>Developed an AI language model for Thai Language, Speech Emotion Recognition using Machine Learning (LSTM model). This project involved extensive data collection, model training, and accuracy optimization.</p>
                    <div className="tech-tags">
                        <span>Python</span>
                        <span>TensorFlow</span>
                        <span>LSTM</span>
                        <span>NLP</span>
                    </div>
                </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
                <div className="macbook">
                    <div className="screen">
                        <div className="screen-content">
                            <a href="https://youtu.be/0EDLMGINCeE?si=jb-3JOpSlZQXFHMD" target="_blank" rel="noreferrer">
                                <img src={nodered} className="zoom" alt="Smart Farm Project" />
                                <div className="play-button">
                                   <span className="youtube-icon"></span>
                                </div>
                            </a>
                        </div>
                        <div className="notch"></div>
                    </div>
                    <div className="keyboard"></div>
                </div>
                <div className="project-content">
                    <a href="https://youtu.be/0EDLMGINCeE?si=jb-3JOpSlZQXFHMD" target="_blank" rel="noreferrer">
                        <h2>Smart Farm using Java, Node-Red, Firebase with Line Notification</h2>
                    </a>
                    <p>An IoT solution for agricultural monitoring with real-time data collection and automated notifications through Line app when environmental parameters exceed thresholds.</p>
                    <div className="tech-tags">
                        <span>Java</span>
                        <span>Node-RED</span>
                        <span>Firebase</span>
                        <span>IoT</span>
                    </div>
                </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
                <div className="macbook">
                    <div className="screen">
                        <div className="screen-content">
                            <a href="https://youtu.be/_9POQXc6K38?si=a8maLCPQAaaJMTZ-" target="_blank" rel="noreferrer">
                                <img src={smarthouse} className="zoom" alt="Smart House Project" />
                                <div className="play-button">
                                   <span className="youtube-icon"></span>
                                </div>
                            </a>
                        </div>
                        <div className="notch"></div>
                    </div>
                    <div className="keyboard"></div>
                </div>
                <div className="project-content">
                    <a href="https://youtu.be/_9POQXc6K38?si=a8maLCPQAaaJMTZ-" target="_blank" rel="noreferrer">
                        <h2>Smart House using Flutter, Firebase, Arduino, Node-RED and ML</h2>
                    </a>
                    <p>A comprehensive home automation system with mobile control, environmental monitoring, and predictive features using machine learning for energy optimization.</p>
                    <div className="tech-tags">
                        <span>Flutter</span>
                        <span>Firebase</span>
                        <span>Arduino</span>
                        <span>Machine Learning</span>
                    </div>
                </div>
            </div>

            {/* Project 4 */}
            <div className="project-card">
                <div className="macbook">
                    <div className="screen">
                        <div className="screen-content">
                            <a href="https://youtu.be/viM9KU_TxL8?si=oQGi5JkCkzuc9fF0" target="_blank" rel="noreferrer">
                                <img src={qr} className="zoom" alt="QR Code Smart House Feature" />
                                <div className="play-button">
                                   <span className="youtube-icon"></span>
                                </div>
                            </a>
                        </div>
                        <div className="notch"></div>
                    </div>
                    <div className="keyboard"></div>
                </div>
                <div className="project-content">
                    <a href="https://youtu.be/viM9KU_TxL8?si=oQGi5JkCkzuc9fF0" target="_blank" rel="noreferrer">
                        <h2>Smart House QR Code Device Pairing</h2>
                    </a>
                    <p>Implemented a secure QR code scanning feature to simplify the process of adding new IoT devices to the smart home ecosystem, with automatic configuration.</p>
                    <div className="tech-tags">
                        <span>Flutter</span>
                        <span>QR Code</span>
                        <span>Firebase</span>
                        <span>IoT</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;