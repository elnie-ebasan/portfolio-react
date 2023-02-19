import React, { useState, useEffect  } from 'react';
import './NavBar.css';
import logo from '../UI/portfolio-icon.jpg';
import NavBarItems from './NavBarItems';

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navItems = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ];

  useEffect(() => {
    const title = document.querySelector('.navbar');
    const threshold = title.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset >= threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar-brand">
        <img src={logo} width="30px" height="30px" alt="icon" className='logo'></img>
        <span>My Portfolio</span>
      </div>
      <button className="navbar-toggler" onClick={toggleNav}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavBarItems navItems={navItems} isNavOpen={isNavOpen} />
    </nav>
  );
}

export default NavBar;
