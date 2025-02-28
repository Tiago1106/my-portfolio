'use client'

import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="w-full gap-4 flex flex-col px-4">
      <div className="bg-white rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600">
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <FiMail className="text-blue-500 w-5 h-5" />
                <a href="mailto:tiagofreitasp00@gmail.com" className="text-gray-600 hover:text-blue-500 transition-colors">
                  tiagofreitasp00@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-blue-500 w-5 h-5" />
                <a href="https://wa.me/5516992727711" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
                  +55 (16) 99272-7711
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FiMapPin className="text-blue-500 w-5 h-5" />
                <span className="text-gray-600">
                  Franca, São Paulo - Brazil
                </span>
              </div>

              <div className="flex gap-4 mt-4">
                <a 
                  href="https://www.linkedin.com/in/tiagofp00/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  <FiLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/Tiago1106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/5516992727711"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-gray-800">Send a Message</h2>
            <form 
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                
                const mailtoLink = `mailto:tiagofreitasp00@gmail.com?subject=Contact from ${formData.get('name')}&body=From: ${formData.get('email')}%0D%0A%0D%0A${formData.get('message')}`;
                
                window.location.href = mailtoLink;
              }}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-gray-600">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-gray-600">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  className="p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-gray-600">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your message"
                />
              </div>

              <button 
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
