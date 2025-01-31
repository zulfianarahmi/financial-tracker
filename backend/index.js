const express = require("express");
const cors = require("cors");
const db = require("./db"); // Koneksi database

const app = express();
app.use(express.json());
app.use(cors()); // Biar frontend bisa akses API

// 🔹 API: Tambah transaksi baru
app.post("/transactions", (req, res) => {
  const { tanggal, jumlah, kategori, label } = req.body;
  const sql =
    "INSERT INTO transactions (tanggal, jumlah, kategori, label) VALUES (?, ?, ?, ?)";
  db.query(sql, [tanggal, jumlah, kategori, label], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({
      message: "Transaksi berhasil ditambahkan",
      id: result.insertId,
    });
  });
});

// 🔹 API: Ambil semua transaksi
app.get("/transactions", (req, res) => {
  const sql = "SELECT * FROM transactions ORDER BY tanggal DESC";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.send(results);
  });
});

// 🔹 Jalankan server di port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
