
export default function ContactUs() {
    return (
      <section className="text-center mt-5">
        <h2 className="mb-4">Contact Us</h2>
        <div className="container">
          <div className="row">
            {/* Contact Form */}
            <div className="col-md-8 offset-md-2">
              <form className="bg-light p-4 rounded shadow-sm">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Your name"
                    required
                  />
                </div>
  
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Your email"
                    required
                  />
                </div>
  
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    placeholder="Your phone number"
                  />
                </div>
  
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
  
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
  
        {/* Location Information */}
        <div className="mt-5">
          <h3>Our Location</h3>
          <p>We are located at:</p>
          <address>
            221 Baker Street, London, UK
          </address>
        </div>
  
        {/* Business Hours */}
        <div className="mt-4">
          <h3>Business Hours</h3>
          <p>Our office is open:</p>
          <ul>
            <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
            <li>Saturday - Sunday: Closed</li>
          </ul>
        </div>
      </section>
    );
  }
  