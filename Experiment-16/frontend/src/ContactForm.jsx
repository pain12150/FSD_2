import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email) {
            setStatus('Error: Name and Email are required.');
            return;
        }
        setStatus('Success: Form submitted!');
    };

    return (
        <form onSubmit={handleSubmit} data-testid="contact-form">
            <h2>Contact Us</h2>
            <div>
                <label htmlFor="name-input">Name</label>
                <input 
                    id="name-input" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="Enter your name" 
                />
            </div>
            <div>
                <label htmlFor="email-input">Email</label>
                <input 
                    id="email-input" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Enter your email" 
                />
            </div>
            <button type="submit" data-testid="submit-button">Submit</button>
            {status && <div data-testid="status-message">{status}</div>}
        </form>
    );
}

export default ContactForm;
