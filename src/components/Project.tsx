import React from "react";
import qr from '../assets/images/projects/qr.jpg';
import smarthouse from '../assets/images/projects/smarthouse.jpg';
import nodered from '../assets/images/projects/smarthouse_nodered.jpg';
import speech from '../assets/images/projects/speech.jpg';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://youtu.be/9RKcvm3s-hQ?si=3gTxwy_D4K8Ej1Fl" target="_blank" rel="noreferrer"><img src={speech} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://youtu.be/9RKcvm3s-hQ?si=3gTxwy_D4K8Ej1Fl" target="_blank" rel="noreferrer"><h2>Thai Language, Speech Emotion Recognition using Machine Learning (LSTM model)</h2></a>
                <p>Developed An AI language model for Thai Language, Speech Emotion Recognition using Machine Learning (LSTM model)</p>
            </div>
            <div className="project">
                <a href="https://youtu.be/0EDLMGINCeE?si=jb-3JOpSlZQXFHMD" target="_blank" rel="noreferrer"><img src={nodered} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://youtu.be/0EDLMGINCeE?si=jb-3JOpSlZQXFHMD" target="_blank" rel="noreferrer"><h2>Smart Farm using Java, Node-Red, Firebase with Line Notification Feature</h2></a>
                <p>Smart Farm using Java, Node-Red, Firebase with Line Notification Feature</p>
            </div>
            <div className="project">
                <a href="https://youtu.be/_9POQXc6K38?si=a8maLCPQAaaJMTZ-" target="_blank" rel="noreferrer"><img src={smarthouse} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://youtu.be/_9POQXc6K38?si=a8maLCPQAaaJMTZ-" target="_blank" rel="noreferrer"><h2>Smart House using Flutter, Firebase, Arduino, Node red and Machine Learning (ML).</h2></a>
                <p>Smart House using Flutter, Firebase, Arduino, Node red and Machine Learning (ML).</p>
            </div>
            <div className="project">
                <a href="https://youtu.be/viM9KU_TxL8?si=oQGi5JkCkzuc9fF0" target="_blank" rel="noreferrer"><img src={qr} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://youtu.be/viM9KU_TxL8?si=oQGi5JkCkzuc9fF0" target="_blank" rel="noreferrer"><h2>Smart House feature :- Scanning QR code to add IOT devices (Flutter, Firebase, Arduino and ML)</h2></a>
                <p>Smart House feature :- Scanning QR code to add IOT devices (Flutter, Firebase, Arduino and ML)</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;