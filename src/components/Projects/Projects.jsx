// Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Mes Projets</h2>
            <div>
                {/* Exemple d'un projet */}
                <div className="project-card">
                    <h3>Titre du Projet</h3>
                    <p>Description courte du projet.</p>
                </div>
                {/* Vous pouvez ajouter d'autres projets de la même manière */}
            </div>
        </section>
    );
}

export default Projects;


