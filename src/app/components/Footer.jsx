import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact-info">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h3>CURRENCY</h3>
          <h4 className="currency-info">
            <img src="/images/USA.png" alt="us" />
            <img src="/images/Star.png" alt="." />
            USD
          </h4>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-links">
          <div className="link-group">
            <h4>mettā muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div className="link-group">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="link-group follow-us">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <img src="/images/Insta.png" alt="Instagram" />
              <img src="/images/LinkedIn.png" alt="LinkedIn" />
            </div>

            <h4>mettā muse ACCEPTS</h4>
            <div className="payment-icons">
              <img src="/images/GPay.png" alt="GPay" />
              <img src="/images/Rupay.png" alt="MasterCard" />
              <img src="/images/Ppay.png" alt="Paypal" />
              <img src="/images/amex.png" alt="Amex" />
              <img src="/images/Applepay.png" alt="Apple Pay" />
              <img src="/images/Dpay.png" alt="Shop Pay" />
            </div>
          </div>
        </div>
      </div>

      <p className="footer-copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
