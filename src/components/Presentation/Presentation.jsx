import React from 'react';
import './Presentation.css'; // Assurez-vous d'ajouter ce fichier CSS

const Presentation = () => {
    return (
        <div className="presentation-container">
            <p className="intro-text">Bonjour,<br></br> Je m'appelle Antonin RUDONI</p>
            <p className='description-target'>Je suis activement en quête d'une <span className='highlight'>opportunité
             d'alternance</span> en tant que <span className='highlight'>développeur</span> pour démarrer mon parcours d'ingénieur en informatique.</p>
            <a href="../public/CV Antonin RUDONI.pdf" className="cv-button">Télécharger mon CV</a>
        </div>
        
    );
}

export default Presentation;

