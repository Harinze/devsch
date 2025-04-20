// src/pages/Contact.tsx
import React, { useState } from 'react';
import Header from '../components/Header';

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
    <div>
      <Header />
      <main className="bg-white text-black py-12 px-4">
        <h2 className="text-3xl text-center font-bold mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border border-gray-400 rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-2 border border-gray-400 rounded"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-2 border border-gray-400 rounded"
          ></textarea>
          <button type="submit" className="w-full bg-yellow text-black p-2 rounded hover:bg-yellow-600">
            Send Message
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
