// About.js
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-section">
                <h2>Études</h2>
                <p>
                    [Votre texte ici... par exemple: "Actuellement étudiant en informatique à [Nom de l'institution], je me spécialise dans ..."]
                </p>
            </div>
            <div className="about-section">
                <h2>Vie Personnelle</h2>
                <p>
                    [Votre texte ici... par exemple: "En dehors de mes études, je suis passionné par ..."]
                </p>
            </div>
            <div className="about-section">
                <h2>Technologies</h2>
                <p>
                    [Votre texte ici... par exemple: "Je maîtrise plusieurs technologies, notamment React, Node.js..."]
                </p>
            </div>
        </div>

    );
}

export default About;


