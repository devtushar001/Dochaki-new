import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            <div className="privacy-policy-header">
                <h1>Privacy Policy</h1>
                <p><strong>Effective Date: [Insert Date]</strong></p>
            </div>

            <div className="privacy-policy-content">
                <p>Dochaki Designs ("we," "us," or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, use our services, or interact with us in any other way.</p>

                <p>By using our services, you agree to the terms outlined in this policy. If you do not agree with this policy, please refrain from using our services.</p>

                <h2>1. Information We Collect</h2>
                <p>We collect various types of information to provide and improve our services to you. This may include:</p>
                <ul>
                    <li><strong>Personal Information:</strong> Name, email address, phone number, payment details.</li>
                    <li><strong>Device Information:</strong> Your IP address, browser type, and device information.</li>
                    <li><strong>Transaction Information:</strong> Details of purchases and services requested.</li>
                    <li><strong>Other Information:</strong> Images for bike modifications (with your consent).</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul>
                    <li>To process orders, including bike modifications and part manufacturing.</li>
                    <li>To communicate updates, promotions, and customer service inquiries.</li>
                    <li>To improve our website and services.</li>
                    <li>To comply with legal obligations.</li>
                </ul>

                <h2>3. How We Protect Your Information</h2>
                <p>We implement industry-standard security measures to protect your personal information, though we cannot guarantee complete security due to the inherent risks of data transmission over the internet.</p>

                <h2>4. Cookies and Tracking Technologies</h2>
                <p>We use cookies and similar technologies to improve our website and gather usage data. You can control cookies through your browser settings. Some website features may not work properly if cookies are disabled.</p>

                <h2>5. Sharing Your Information</h2>
                <p>We may share your information in the following circumstances:</p>
                <ul>
                    <li><strong>Service Providers:</strong> Trusted third parties who help with operations like payment processing and shipping.</li>
                    <li><strong>Legal Compliance:</strong> If required by law or to protect our rights.</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, sale, or transfer of business assets.</li>
                </ul>

                <h2>6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Access your personal information.</li>
                    <li>Request corrections to any inaccuracies.</li>
                    <li>Request deletion of your data.</li>
                    <li>Object to or restrict processing of your data.</li>
                </ul>

                <h2>7. Data Retention</h2>
                <p>We retain your information as long as necessary to fulfill the purposes outlined in this policy, or as required by law.</p>

                <h2>8. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their privacy policies.</p>

                <h2>9. Changes to This Privacy Policy</h2>
                <p>We may update this policy from time to time. Any updates will be posted on this page with a revised "Effective Date."</p>

                <h2>10. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
                <p><strong>Dochaki Designs</strong><br />
                Email: <a href="mailto:contact@dochakidesigns.com">contact@dochakidesigns.com</a><br />
                Phone: [Phone Number]</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;