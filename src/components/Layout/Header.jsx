import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'; // Import the CSS file for styling

const Header = () => {
  const headerStyle = {
   
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
  };
  return (
    <>
      <header className="header" >
        <div className="header-wrapper"style={headerStyle}>
          <Link to="" className="logo1">
            <img src="\Assests\logo1.png" alt="logo1" className="logo-image1" />
          </Link>
          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Product" className="nav-link">Product</Link>
                </li>
                
                <li className="nav-item">
                  <Link to="/Policy" className="nav-link">Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Contact" className="nav-link">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/SignIn" className="nav-link">Sign Up</Link>
                </li>
                <li className="nav-item">
                <li className="nav-item">
  <Link 
    to="/SignUp" 
    className="nav-link"
    style={{
      backgroundColor: '#23329B ',
      color: 'white',
      borderRadius: '10px'
    }}
  >
    Sign In
  </Link>
</li>

</li>

              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
