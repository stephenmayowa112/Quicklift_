import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";

  
import React, { useState } from 'react';

  const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    function getMenuStyles(menuOpen){
      if(document.documentElement.clientWidth <= 800)
        return{
            right: !menuOpen && "-100%"
        }
    }
  
    return (
      <div className="h-wrapper">
        <div className="h-container">
          <div className="h-logo">QuickLift</div>
          <div className="h-nav" style={getMenuStyles(menuOpen)}>
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
            <span>
              <button>
              Download            
              </button>
              </span>

          </div>
          <button className="hamburger" onClick={() => setMenuOpen(((m) => !m))}>
              <span className="hamburger-icon"><GiHamburgerMenu /></span>
            </button>
        </div>
      </div>
    );
  };
  
  export default Header;