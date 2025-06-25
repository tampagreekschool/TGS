import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">
            {/* Logo */}
            <img 
              src="/images/greek_school_logo_new.png" 
              alt="School of Greek Language and Culture Logo" 
              className="h-16 w-auto"
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-yellow-300 transition duration-300">Home</a>
          <a href="#about" className="hover:text-yellow-300 transition duration-300">About</a>
          <a href="#programs" className="hover:text-yellow-300 transition duration-300">Programs</a>
          <a href="#activities" className="hover:text-yellow-300 transition duration-300">Activities</a>
          <a href="#staff" className="hover:text-yellow-300 transition duration-300">Staff</a>
          <a href="#registration" className="hover:text-yellow-300 transition duration-300">Registration</a>
          <a href="#gallery" className="hover:text-yellow-300 transition duration-300">Gallery</a>
          <a href="#contact" className="hover:text-yellow-300 transition duration-300">Contact</a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <a href="#home" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#programs" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={() => setIsMenuOpen(false)}>Programs</a>
            <a href="#activities" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={() => setIsMenuOpen(false)}>Activities</a>
            <a href="#director" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={() => setIsMenuOpen(false)}>Director</a>
            <a href="#registration" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={() => setIsMenuOpen(false)}>Registration</a>
            <a href="#gallery" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <a href="#contact" className="block py-2 hover:text-yellow-300 transition duration-300" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
