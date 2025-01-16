import React from "react";

const Hero = () => {
  return (
    <header className="hero">
      <nav>
        <h1>KEUANGANKU</h1>
        <ul>
          <li>
            <a href="#Feature">Feature</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="login-btn">Login</button>
      </nav>
      <div className="hero-content">
        <h2>Membuat pendisiplinan keuanganmu</h2>
        <p>
          Finally, the all-in-one practice management tool you've been looking
          for
        </p>
        <button className="read-more">Read More</button>
      </div>
    </header>
  );
};

export default Hero;
