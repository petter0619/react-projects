import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubMenu = e => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right)/2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, {center, bottom});
  }

  const handleSubmenu = e => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  }

  return <nav className="nav" onMouseOver={handleSubmenu}>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="stripe" className="nav-logo"/>
        <button className="btn toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        <li><button className="link-btn" onMouseOver={displaySubMenu}>products</button></li>
        <li><button className="link-btn" onMouseOver={displaySubMenu}>developers</button></li>
        <li><button className="link-btn" onMouseOver={displaySubMenu}>company</button></li>
      </ul>
      <button className="btn signin-btn">sign in</button>
    </div>
  </nav>
}

export default Navbar;
