const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "junction.proxy.rlwy.net", // Host dari Railway
  user: "root", // User dari Railway
  password: "FMxAPzIeNLXFBEQLuQjIzhEAFaZpfqKy", // Password dari Railway
  database: "railway", // Nama database
  port: 39847, // Port dari Railway
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Gagal konek ke database:", err);
    return;
  }
  console.log("✅ Koneksi ke Railway MySQL berhasil!");
});

module.exports = connection;
