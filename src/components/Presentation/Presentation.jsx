import React from 'react';
import './Presentation.css'; // Assurez-vous d'ajouter ce fichier CSS

const Presentation = () => {
    return (
        <div className="presentation-container">
            <p>Bonjour,</p>
            <p>Je m'appelle Antonin RUDONI</p>
            <a href="../public/CV Antonin RUDONI.pdf" download className="cv-button">Télécharger mon CV</a>
        </div>
        
    );
}

export default Presentation;

