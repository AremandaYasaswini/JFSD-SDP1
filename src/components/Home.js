// src/Home.js
import React from 'react';
import '../css/Home.css';
import fruitsImg from '../Images/Fruits.jpeg';
import vegetablesImg from '../Images/vegetables.jpeg';
import leafyVeggiesImg from '../Images/leafy_vegetables.jpeg';

function Home() {
  return (
    <div className="Home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="dark-heading">Empowering Farmers, Enriching Lives</h1>
          <p>Join us in transforming agriculture with innovative solutions.</p>
          <button className="explore-btn">Explore Now</button>
        </div>
      </section>

      <section className="features">
        <h2>Our Services</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src={fruitsImg} alt="Fruits" />
            <h3>Fresh Fruits</h3>
            <p>Delicious and naturally grown fruits delivered to your door.</p>
          </div>
          <div className="feature-card">
            <img src={vegetablesImg} alt="Vegetables" />
            <h3>Farm-Fresh Vegetables</h3>
            <p>Enjoy a variety of seasonal vegetables picked at their peak.</p>
          </div>
          <div className="feature-card">
            <img src={leafyVeggiesImg} alt="Leafy Greens" />
            <h3>Leafy Greens</h3>
            <p>Nutritious leafy greens that are fresh and flavorful.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <button className="cta-btn">Sign Up Now</button>
      </section>

      <footer className="footer">
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;