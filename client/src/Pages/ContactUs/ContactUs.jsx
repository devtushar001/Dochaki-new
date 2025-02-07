import React, { useContext, useEffect, useState } from 'react';
import './ContactUs.css'; // To style the page (we will create this CSS file)
import { toast } from 'react-toastify';
import { imageData } from '../../assets/dochakiData';

const ContactUs = () => {
    // State to manage form inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const formData = {
            firstName,
            lastName,
            contactNumber,
            email,
            message,
        };

        console.log(formData);

        // Send data to the backend (Example using fetch)
        try {
            const response = await fetch(`${url}/api/contact/data`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success (e.g., show a success message)
                toast.message('Message sent successfully!');
            } else {
                // Handle error (e.g., show an error message)
                toast.error('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Something went wrong. Please try again later.');
        }
    };

    useEffect(()=> {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="contact-us">
            <div className="left-container">
                <img src={imageData.dochaki_logo} alt="Logo" />
                <p className="info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sint adipisci natus ea cupiditate, neque rerum voluptas? Non qui velit nihil omnis inventore!
                </p>
                <div className="connecting-platforms">
                <h4>Connect with us..</h4>
                    <a href="https://www.facebook.com/dochaki/" target='_blank'><img src={imageData.close_icon} alt="" /></a>
                    <a href="https://www.instagram.com/dmototech/" target='_blank'><img src={imageData.close_icon} alt="" /></a>
                    <a href="https://wa.me/918806795165" target='_blank'><img src={imageData.close_icon} alt="" /></a>
                </div>
                <div className="other-connecting-details">
                    <h4>Other connecting details...</h4>
                    <p>Contact : +91-880-679-5165</p>
                    <p>Email : dochakidesigns@gmail.com</p>
                </div>
            </div>
            <div className="right-container">
                <fieldset>
                    <legend>Contact Us</legend>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="fullname">
                            <div className="firstname">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    placeholder='First name'
                                    type="text"
                                    id="firstName"
                                    className="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} // Update state
                                />
                            </div>
                            <div className="lastname">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    placeholder='Last name'
                                    type="text"
                                    id="lastName"
                                    className="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)} // Update state
                                />
                            </div>
                        </div>
                        <div className="contact">
                            <div className="contact-number">
                                <label htmlFor="contactNumber">Contact Number</label>
                                <input
                                    placeholder='Contact number'
                                    type="tel"
                                    id="contactNumber"
                                    value={contactNumber}
                                    onChange={(e) => setContactNumber(e.target.value)} // Update state
                                />
                            </div>
                            <div className="contact-email">
                                <label htmlFor="email">Email</label>
                                <input
                                    placeholder='Email'
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Update state
                                />
                            </div>
                        </div>
                        <div className="message">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                placeholder='Text message'
                                id="message"
                                className="user-message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} // Update state
                                style={{ height: '450px' }}
                            />
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </fieldset>
            </div>

        </div>

    );
};

export default ContactUs;