import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="mb-4 text-center">Contact Me</h2>
          <form>
            <div className="form-group">
              <label htmlFor="nameInput">Name</label>
              <input type="text" className="form-control" id="nameInput" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="emailInput">Email address</label>
              <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="messageInput">Message</label>
              <textarea className="form-control" id="messageInput" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-6">
          <h2 className="mb-4 text-center">Contact Info</h2>
          <p className="mb-2"><i className="fas fa-map-marker-alt"></i> Samarkand & Tashkent Uzbekistan </p>
          <p className="mb-2"><i className="fas fa-phone"></i> +998994545597 </p>
          <p className="mb-2"><i className="fas fa-envelope"></i> sohibjonuzoqov01gmail.com </p>
          <div className="social-links mt-3">
            <a href="#" className="twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" className="facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" className="instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" className="linkedin"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
