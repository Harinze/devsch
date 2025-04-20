import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-black text-white p-4">
    <nav className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">DevSch</h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-yellow">Home</Link></li>
        <li><Link to="/about" className="hover:text-yellow">About</Link></li>
        <li><Link to="/pricing" className="hover:text-yellow">Pricing</Link></li>
        <li><Link to="/contact" className="hover:text-yellow">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
