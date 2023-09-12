// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contactez-moi</h2>
            <form>
                <div>
                    <label htmlFor="name">Nom:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </section>
    );
}

export default Contact;

