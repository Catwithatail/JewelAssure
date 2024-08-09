import Navbar from "@/components/Homepage/navbar";
import Footer from "@/components/Homepage/footer";
import styles from "@/app/contact/page.css";
import React from "react";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h2>Contact JewelryAssure</h2>
        <p className="company-info">
          At JewelryAssure, we are dedicated to ensuring the authenticity and
          value of your precious jewelry. Reach out to us for any inquiries or
          assistance.
        </p>

        <div className="contact-details">
          <h3>Email Us</h3>
          <p>
            <a href="mailto:support@jewelryassure.com">
              support@jewelryassure.com
            </a>
            <br />
            <a href="mailto:info@jewelryassure.com">info@jewelryassure.com</a>
          </p>

          <h3>Call Us</h3>
          <p>
            <a href="tel:+1234567890">+1 234 567 890</a>
            <br />
            <a href="tel:+0987654321">+0 987 654 321</a>
          </p>

          <h3>Visit Us</h3>
          <p>
            1234 Diamond Lane,
            <br />
            Suite 567,
            <br />
            Gem City, GC 12345
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
