import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faMobile, faMicrochip, faCertificate } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import '../assets/styles/Expertise.scss';
import uxImage from '../assets/certificates/ux.png';
import blockchain from '../assets/certificates/blockchain.png';
import software from '../assets/certificates/software.png';

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




const certificates = [
    {
        title: "Google UX Design",
        issuer: "Coursera (Designed By: Google)",
        year: "2022",
        previewImage: uxImage,
    },
    {
        title: "Blockchain Specialization",
        issuer: "Coursera (University of Buffalo)",
        year: "2022",
        previewImage: blockchain,
    },
    {
        title: "Software Engineering",
        issuer: "Coursera (The Hong Kong University of Science and Technology)",
        year: "2024",
        previewImage: software,
    }
];

function Expertise() {
    const [open, setOpen] = React.useState(false);
    const [selectedCert, setSelectedCert] = React.useState<any>(null);

    const handleClickOpen = (cert: any) => {
        setSelectedCert(cert);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
            
            <div className="skills-container certificates-container">
                <h1>Certifications</h1>
                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <div 
                            key={index} 
                            className="certificate-card"
                            onClick={() => handleClickOpen(cert)}
                        >
                            <FontAwesomeIcon icon={faCertificate} size="2x" />
                            <div className="certificate-info">
                                <h3>{cert.title}</h3>
                                <p>{cert.issuer}</p>
                                <span className="year">{cert.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Dialog 
                open={open} 
                onClose={handleClose}
                maxWidth="md"
                fullWidth
            >
                <DialogContent className="certificate-dialog">
                    {selectedCert && (
                        <>
                            <h2>{selectedCert.title}</h2>
                            <p className="issuer">{selectedCert.issuer}</p>
                            <div className="certificate-image-container">
                                <img 
                                    src={selectedCert.previewImage} 
                                    alt={`${selectedCert.title} Certificate`}
                                    className="certificate-image"
                                    onContextMenu={(e) => e.preventDefault()}
                                />
                            </div>
                            <p className="preview-notice">Certificate preview - download not available</p>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Expertise;