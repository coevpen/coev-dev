import React, { useState } from 'react';
import { validateEmail } from '../../../helper';

function Contact(){
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
 
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };

    return (
        <section>
            
            <form id="contact-form" action="mailto:koinuevins@gmail.com" method="post" encType="text/plain">
                <h1>Contact me</h1>
                <div className="name-div">
                    <label className="formName" htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="email-div">
                    <label className="email" htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label className="message" htmlFor="message">Message:</label>
                    <div>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className="submitBtn">Submit</button>
        </form>
        </section>
    );
}

export default Contact;