const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "junction.proxy.rlwy.net", // Ganti dengan host dari Railway
  user: "root", // Ganti dengan user dari Railway
  password: "FMxAPzIeNLXFBEQLuQjIzhEAFaZpfqKy", // Ganti dengan password dari Railway
  database: "railway", // Ganti dengan database name dari Railway
  port: 39847, // Ganti dengan port dari Railway
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Gagal konek ke database:", err);
    return;
  }
  console.log("✅ Koneksi ke Railway MySQL berhasil!");
});

module.exports = connection;
