import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "../../assets//img/logo.png";
import NavbarDropdown from './navbar-dropdown.jsx';

function Navbar() {
  const [ sticky, setSticky ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > -1);
      console.log('scrollY:', window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`${sticky ? "sticky" : ""}`}>
      <div className="container font-600">
        <div className="list">
          <li><img src={logo} alt="Logo" className='logo' /></li>
          <li>Home</li>
          <li>Jobs <div className="downarrow"></div></li>
          <li>Career Compass <div className="downarrow"></div></li>
          <li>Community <div className="downarrow"></div></li>
        </div>
        <NavbarDropdown />
      </div>
      </nav>
    </>
  );
}

export default Navbar;
