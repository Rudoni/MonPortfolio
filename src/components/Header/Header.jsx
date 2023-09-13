
import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let st = document.documentElement.scrollTop;

            if (st > 0) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Suppression de l'écouteur d'événement lors du nettoyage
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="main-header">
            <nav>
                <ul>
                    <li className="bubble-item"><a href="#about">À PROPOS</a></li>
                    <li className="bubble-item"><a href="#projects">PROJETS</a></li>
                    <li className="bubble-item"><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
