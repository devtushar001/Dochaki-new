import React from 'react';
import './AboutUs.css';
import { imageData } from '../../assets/dochakiData';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <header className="about-us-header">
                <img src={imageData.dochaki_logo} alt="Dochaki Designs workshop" />
                <p>Your Trusted Partner in Motorcycle Modifications and Custom Parts</p>
            </header>

            <section className="about-us-intro">
                <div className="about-us-text">
                    <h2>About Us</h2>
                    <p>
                        At Dochaki Designs, we believe that every bike tells a story. Founded with a passion for
                        motorcycles and an eye for perfection, we specialize in high-quality bike modifications,
                        turning your ordinary ride into an extraordinary machine. Our team of experts is dedicated
                        to offering personalized modifications and creating custom parts for top-tier brands like
                        BMW, Kawasaki, Harley Davidson, Himalayan 450, and many others.
                    </p>
                    <p>
                        We combine craftsmanship, precision engineering, and a love for motorcycles to bring
                        dreams to life, whether you are looking to enhance performance, aesthetics, or both. At Dochaki
                        Designs, we aim to deliver unmatched service and quality, ensuring every bike we touch becomes
                        a masterpiece on wheels.
                    </p>
                </div>
                <div className="about-us-image">
                </div>
            </section>

            <section className="about-us-services">
                <h2>Our Expertise</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>Custom Bike Modifications</h3>
                        <p>
                            Our skilled team works with you to design and modify bikes to your exact specifications. Whether
                            you're looking for a custom scrambler, cafe racer, or any other style, we've got you covered.
                        </p>
                    </div>
                    <div className="service-card">
                        <h3>High-Quality Bike Parts</h3>
                        <p>
                            We design and manufacture custom bike parts for a variety of premium motorcycle brands. From
                            performance upgrades to aesthetic enhancements, our parts are built to last and perform.
                        </p>
                    </div>
                    <div className="service-card">
                        <h3>Expert Engineering</h3>
                        <p>
                            Our team is composed of expert engineers with deep knowledge of motorcycle technology. We provide
                            top-notch technical solutions for performance and safety, ensuring your bike runs at its best.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-us-brands">
                <h2>We Work with the Best</h2>
                <p>We are proud to offer our expertise to the most recognized and respected motorcycle brands:</p>
                <div className="brands-logos">
                    <img src="https://via.placeholder.com/120x60?text=BMW" alt="BMW" />
                    <img src="https://via.placeholder.com/120x60?text=Kawasaki" alt="Kawasaki" />
                    <img src="https://via.placeholder.com/120x60?text=Harley+Davidson" alt="Harley Davidson" />
                    <img src="https://via.placeholder.com/120x60?text=Himalayan+450" alt="Himalayan 450" />
                </div>
            </section>

            <footer className="about-us-footer">
                <p>Contact us today to bring your dream bike to life!</p>
            </footer>
        </div>
    );
};

export default AboutUs;