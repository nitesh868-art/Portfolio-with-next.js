'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-24 px-6 section-transparent"
    >
      <div
        className="max-w-7xl mx-auto professional-glass-card p-12 card-hover-effect"
        onMouseMove={e => {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          card.style.setProperty('--x', `${x}%`);
          card.style.setProperty('--y', `${y}%`);
        }}
        onMouseLeave={e => {
          const card = e.currentTarget;
          card.style.setProperty('--x', '50%');
          card.style.setProperty('--y', '50%');
        }}
      >
        <div className="glass-spotlight" />
        
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl professional-heading text-white mb-8">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 professional-body max-w-3xl mx-auto">
            Ready to collaborate or have a project in mind? Let's discuss how we can work together 
            to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8 professional-subheading">
              Let's Connect
            </h3>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-white/10">
                <Mail className="text-blue-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 professional-subheading">Email</h4>
                <p className="text-gray-300 text-lg professional-body">niteshpandey11231@gmail.com</p>
                <a href="mailto:niteshpandey11231@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Send Email
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20">
                <Phone className="text-green-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 professional-subheading">Phone</h4>
                <p className="text-gray-300 text-lg professional-body">+91 98765 43210</p>
                <a href="tel:+919876543210" className="text-green-400 hover:text-green-300 transition-colors">
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-white/10 to-gray-300/10">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 professional-subheading">Location</h4>
                <p className="text-gray-300 text-lg professional-body">Ahmedabad, Gujarat, India</p>
                <span className="text-white/90">Available for remote work</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-xl font-bold text-white mb-6 professional-subheading">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/nitesh868-art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="professional-social"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nitesh-pandey-901b07331/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="professional-social"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="/my_resume.pdf"
                  download
                  className="professional-social"
                >
                  <Download className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 rounded-3xl p-8 border border-white/10"
          >
            <h3 className="text-3xl font-bold text-white mb-8 professional-subheading">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-3 text-sm font-semibold text-white professional-subheading">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white/10 text-white border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 text-lg professional-body"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-3 text-sm font-semibold text-white professional-subheading">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white/10 text-white border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 text-lg professional-body"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-3 text-sm font-semibold text-white professional-subheading">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or how I can help..."
                  required
                  className="w-full px-6 py-4 rounded-xl bg-white/10 text-white border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none text-lg professional-body"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 px-10 py-4 btn-primary text-white professional-btn shadow-2xl font-semibold text-lg w-full justify-center"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 