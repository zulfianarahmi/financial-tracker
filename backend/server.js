const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Supaya frontend bisa akses backend
app.use(express.json()); // Parsing JSON body

let transactions = []; // Penyimpanan data sementara

// Endpoint POST untuk menambahkan transaksi baru
app.post("/api/transactions", (req, res) => {
  const { tanggal, jumlah, kategori, label } = req.body;
  const newTransaction = { id: Date.now(), tanggal, jumlah, kategori, label };
  transactions.push(newTransaction);
  res
    .status(201)
    .json({
      message: "Transaksi berhasil ditambahkan!",
      transaksi: newTransaction,
    });
});

// Endpoint GET untuk mengambil semua transaksi
app.get("/api/transactions", (req, res) => {
  res.json(transactions);
});

// Jalankan server
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server berjalan di http://localhost:${PORT}`)
);
