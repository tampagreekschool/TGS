const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Contact Us</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-800">Director</h4>
                  <p>Mr. Yannis Giavaras</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">Phone</h4>
                  <p>718-419-4413</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">Email</h4>
                  <p>igiavaras@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">Location</h4>
                  <p>Saint John's Greek Orthodox Church</p>
                  <p>2418 W Swann Ave, Tampa</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">Hours</h4>
                  <p>Every Saturday, 1:00 PM - 3:00 PM</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Send a Message</h3>
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                className="space-y-4"
              >
                {/* Hidden field for Netlify Forms */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field for spam protection */}
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Phone Number (Optional)"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <select 
                    id="subject" 
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="Registration Inquiry">Registration Inquiry</option>
                    <option value="Program Information">Program Information</option>
                    <option value="Schedule Question">Schedule Question</option>
                    <option value="General Question">General Question</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4} 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Please tell us about your interest in our Greek language and culture programs..."
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
                   <div className="mt-12">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Find Us</h3>
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.899320697998!2d-82.4872943242093!3d27.937015399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c365e193ec4f%3A0xe45866a76cacee13!2sSt.%20John%20the%20Baptist%20Greek%20Orthodox%20Church!5e0!3m2!1sen!2sus!4v1718254378876!5m2!1sen!2sus" 
                  width="600" 
                  height="450" 
                  style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
