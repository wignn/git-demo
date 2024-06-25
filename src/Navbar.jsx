import PropTypes from 'prop-types';
import './navbar.css';
import logo from './assets/Default_logo_for_a_website_with_a_book_and_knowledge_theme_0_0993fbff-526b-4ca6-8e58-127fd7d38577_.png';

const user = {
  imageUrl: logo
};

function Navbar({ onToggle }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={user.imageUrl} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a onClick={onToggle}>Home</a></li>
        <li> <a onClick={onToggle}>About</a></li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default Navbar;
