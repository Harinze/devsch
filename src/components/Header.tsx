import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-black text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">DevSch</Link>
        </h1>

        {/* Desktop and Tablet Navbar */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-yellow-500">Home</Link>

          {/* Explore Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-yellow-500 flex items-center space-x-2"
            >
              <span>Explore</span>
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg">
                <Link to="/about" className="block px-4 py-2 hover:bg-yellow-500">About</Link>
                <Link to="/pricing" className="block px-4 py-2 hover:bg-yellow-500">Pricing</Link>
                <Link to="/contact" className="block px-4 py-2 hover:bg-yellow-500">Contact</Link>
                <Link to="/solutions" className="block px-4 py-2 hover:bg-yellow-500">Solutions</Link>
                <Link to="/login" className="block px-4 py-2 hover:bg-yellow-500">Login</Link>
                <Link to="/templates" className="block px-4 py-2 hover:bg-yellow-500">Templates</Link>
                <Link to="/blog" className="block px-4 py-2 hover:bg-yellow-500">Blog</Link>
                <Link to="/quizzes" className="block px-4 py-2 hover:bg-yellow-500">Quizzes</Link>
              </div>
            )}
          </div>

          <Link to="/signup" className="hover:text-yellow-500">Get Started</Link>
        </div>

        {/* Mobile Navbar (Hamburger Menu) */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleDropdown} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isDropdownOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white rounded-lg shadow-lg">
          <Link to="/about" className="block px-4 py-2 hover:bg-yellow-500">About</Link>
          <Link to="/pricing" className="block px-4 py-2 hover:bg-yellow-500">Pricing</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-yellow-500">Contact</Link>
          <Link to="/solutions" className="block px-4 py-2 hover:bg-yellow-500">Solutions</Link>
          <Link to="/login" className="block px-4 py-2 hover:bg-yellow-500">Login</Link>
          <Link to="/templates" className="block px-4 py-2 hover:bg-yellow-500">Templates</Link>
          <Link to="/blog" className="block px-4 py-2 hover:bg-yellow-500">Blog</Link>
          <Link to="/quizzes" className="block px-4 py-2 hover:bg-yellow-500">Quizzes</Link>
          <Link to="/signup" className="block px-4 py-2 hover:bg-yellow-500">Get Started</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
