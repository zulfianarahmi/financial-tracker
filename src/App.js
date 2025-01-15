import react from "react";
// import style from "...."

function App() {
  return (
    <div>
      {/* Hero Section */}
      <header className="hero">
        <nav>
          <h1>KEUANGANKU</h1>
          <ul>
            <li>
              <a href="#Feature"></a>
            </li>
            <li>
              <a href="#about"></a>
            </li>
            <li>
              <a href="#contact"></a>
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
        // <img src="hero.jpg" alt="Hero Image" />
      </header>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Our Features</h2>
        <div className="features-container">
          {/* Card 1 */}
          <div className="feature-card">
            <img
              src="img\money.png"
              alt="Feature Icon 1"
              className="feature-icon"
            />
            <h3 className="feature-title">Pencatatan Transaksi Harian</h3>
            <p className="feature-description">
              Catat pemasukan dan pengeluaran dengan mudah, termasuk tanggal,
              jumlah, dan kategori (contoh: Makanan, Transportasi, Hiburan).
            </p>
          </div>
          {/* Card 2 */}
          <div className="feature-card">
            <img
              src="img\hand.png"
              alt="Feature Icon 2"
              className="feature-icon"
            />
            <h3 className="feature-title">Analisis Mingguan & Bulanan</h3>
            <p className="feature-description">
              Tampilkan dan filter transaksi berdasarkan minggu atau bulan untuk
              memahami pola pengeluaran/pemasukan.
            </p>
          </div>
          {/* Card 3 */}
          <div className="feature-card">
            <img
              src="img/hand2.png"
              alt="Feature Icon 3"
              className="feature-icon"
            />
            <h3 className="feature-title">Kategori & Total Pengeluaran</h3>
            <p className="feature-description">
              Kelompokkan transaksi berdasarkan kategori untuk melihat total
              pengeluaran atau pemasukan per kategori dengan cepat.
            </p>
          </div>
        </div>

        <div className="feature-button-container">
          <a href="feature.html" className="feature-button">
            Explore All Features
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            At <strong>Financial Tracker</strong>, we believe that everyone
            deserves control over their finances. Our mission is to provide a
            simple and effective way to track daily expenses and income, helping
            users make informed financial decisions.
          </p>
        </div>
        <div className="about-content">
          <h2>Our Vision</h2>
          <p>
            Our vision is to empower individuals to take control of their
            financial future by offering an intuitive platform that encourages
            better financial planning and awareness.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-us">
        <h2>Contact Us</h2>
        <form>
          <label for="name"> Name :</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
          <label for="name"> Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
          <label for="message"> Message :</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Your Website Name. All rights reserved.</p>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
