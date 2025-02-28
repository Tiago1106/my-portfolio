import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white py-6">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Tiago Pinheiro. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/tiagofp00/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/Tiago1106"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;