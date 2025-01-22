const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const transactions = [];

// Ambil semua transaksi
app.get("/api/transactions", (req, res) => {
  res.json(transactions);
});

// Tambahkan transaksi baru
app.post("/api/transactions", (req, res) => {
  const newTransaction = { id: Date.now(), ...req.body };
  transactions.push(newTransaction);
  res
    .status(201)
    .json({
      message: "Transaksi berhasil ditambahkan!",
      transaction: newTransaction,
    });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
