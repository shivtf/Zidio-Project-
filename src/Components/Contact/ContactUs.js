import React from "react";
import "./ContactUs.css";
import styles from "./ContactUs.module.css"; // Importing styles from CSS module if needed

const ContactUs = () => {
  return (
    <>
      {/* Background and Hero Section */}
      <div className={styles.background}>
        <div className={styles.hero}>
          <div className={styles["hero-text"]}>
            <h1 className="text-7xl font-bold">Contact Us</h1>
            <div className={styles.breadcrumb}>
              <a href="#">Home</a> &gt; <a href="#">Contact Us</a>
            </div>
          </div>
          <div className={styles["hero-image"]}>
            <img
              src="https://storage.googleapis.com/a1aa/image/JoMyH4wbfxy4CqaYEftxmhcyOysAE1PEtHc0eDVbmabVQjJnA.jpg"
              alt="Person working on futuristic interface"
              width="300"
              height="300"
            />
          </div>
        </div>
      </div>

      {/* Existing code */}
      <div className="contactPage">
        {/* Breadcrumb section (this will remain as is) */}

        {/* Contact Section */}
        <div className="contact-section">
          {/* Header Section */}

          {/* Contact Us Section */}
          <section className="contact-us">
            <div className="container">
              <div className="contact-content">
                {/* Contact Form */}
                <div className="form-container">
                  <h3>Write to Us Anytime</h3>
                  <form action="#" method="post">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter E-Mail"
                      required
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                    <select name="subject">
                      <option value="">Select Subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Our Services</option>
                      <option value="support">Support</option>
                    </select>
                    <textarea
                      name="message"
                      placeholder="Write Message"
                      rows="5"
                      required
                    ></textarea>
                    <button type="submit">Send Message</button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="contact-info">
                  <h3>Don't Forget to Contact Us</h3>
                  <p>
                    <strong>Call Us:</strong> +91-1234567890
                  </p>
                  <p>
                    <strong>Email Us:</strong> contact@zidiodev.com
                  </p>
                  <p>
                    <strong>Office Hours:</strong> 9:00 AM to 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="map">
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124518.23865252778!2d77.54642003982327!3d12.765847630336935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x84179333b909112d%3A0x99b7aa8200259bb9!2sQJ8H%2B8GW%2C%20Jigani%2C%20Bengaluru%2C%20Karnataka%20560105!3m2!1d12.7658604!2d77.62882189999999!5e0!3m2!1sen!2sin!4v1728662458946!5m2!1sen!2sin"
                frameBorder="0"
                allowFullScreen
                title="Zidio Development Location"
              ></iframe>
            </div>
          </section>

          {/* Footer Section */}
          <footer className="footer">
            <div className="container">
              <div className="footer-grid">
                {/* Company Info */}
                <div className="footer-column">
                  <img
                    src="https://zidio.in/assets/images/home-2/zidio.png"
                    alt="Zidio Development Logo"
                    className="footer-logo"
                  />
                  <p>
                    At Zidio Development, we specialize in innovative software
                    solutions. Our team is dedicated to delivering high-quality
                    projects.
                  </p>
                  <a href="#" className="btn discover-more">
                    Discover More →
                  </a>
                </div>

                {/* Company Links */}
                <div className="footer-column">
                  <h3>Company</h3>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>

                {/* Services Links */}
                <div className="footer-column">
                  <h3>Our Services</h3>
                  <ul>
                    <li>
                      <a href="#">IT Solutions</a>
                    </li>
                    <li>
                      <a href="#">Cyber Security</a>
                    </li>
                    <li>
                      <a href="#">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#">Machine Learning</a>
                    </li>
                    <li>
                      <a href="#">Cloud Services</a>
                    </li>
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="footer-column">
                  <h3>Newsletter</h3>
                  <p>Subscribe to Latest Newsletter</p>
                  <form action="#" className="newsletter-form">
                    <input
                      type="email"
                      placeholder="Enter Your E-Mail"
                      required
                    />
                    <button type="submit" className="btn subscribe-btn">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
