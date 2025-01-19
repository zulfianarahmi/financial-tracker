import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="section-title">Our Features</h2>
      <div className="features-container">
        {/* Card 1 */}
        <div className="feature-card">
          <img src="/money.png" alt="Feature Icon 1" className="feature-icon" />
          <h3 className="feature-title">Pencatatan Transaksi Harian</h3>
          <p className="feature-description">
            Catat pemasukan dan pengeluaran dengan mudah, termasuk tanggal,
            jumlah, dan kategori (contoh: Makanan, Transportasi, Hiburan).
          </p>
        </div>
        {/* Card 2 */}
        <div className="feature-card">
          <img src="/hand.png" alt="Feature Icon 2" className="feature-icon" />
          <h3 className="feature-title">Analisis Mingguan & Bulanan</h3>
          <p className="feature-description">
            Tampilkan dan filter transaksi berdasarkan minggu atau bulan untuk
            memahami pola pengeluaran/pemasukan.
          </p>
        </div>
        {/* Card 3 */}
        <div className="feature-card">
          <img src="/hand2.png" alt="Feature Icon 3" className="feature-icon" />
          <h3 className="feature-title">Kategori & Total Pengeluaran</h3>
          <p className="feature-description">
            Kelompokkan transaksi berdasarkan kategori untuk melihat total
            pengeluaran atau pemasukan per kategori dengan cepat.
          </p>
        </div>
      </div>

      <div className="feature-button-container">
        <Link to="/tracker" className="feature-button">
          Explore All Features
        </Link>
      </div>
    </section>
  );
};

export default Features;
