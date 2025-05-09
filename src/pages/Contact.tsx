import React, { useState } from 'react';
import Header from '../components/Header';
import AirtimeWhatsApp from '../components/Whasapp';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Contact Us Title */}
          <h2 className="text-4xl font-extrabold text-gray-800">Contact Us</h2>
          <p className="text-lg text-gray-600">
            We’re here to help! Reach out to us and we’ll get back to you within 6 hours. 
            The maximum response time is 12 hours.
          </p>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full bg-yellow-500 text-black p-3 rounded-xl font-semibold hover:bg-yellow-600 transition duration-300">
                Send Message
              </button>
            </div>
          </form>

          {/* Additional Information */}
          <div className="mt-8 text-gray-600">
            <p>
              We value your inquiry and strive to respond as quickly as possible. 
              For urgent matters, feel free to reach out via our social media channels.
            </p>
          </div>
        </div>
      </main>
    <AirtimeWhatsApp/>
    </div>
  );
};

export default Contact;
