import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

function FinancialTracker() {
  const [transactions, setTransactions] = React.useState([]);
  const [transaction, setTransaction] = React.useState({
    date: "",
    amount: "",
    category: "",
    label: "",
  });
  const [filters, setFilters] = React.useState({ category: "", label: "" });
  const [filteredTransactions, setFilteredTransactions] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  // Ambil semua transaksi dari backend saat aplikasi dimulai
  React.useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/transactions");
        const data = await response.json();
        setTransactions(data);
        setFilteredTransactions(data);
        const totalAmount = data.reduce((sum, t) => sum + t.amount, 0);
        setTotal(totalAmount);
      } catch (error) {
        console.error("Gagal mengambil transaksi:", error.message);
      }
    };
    fetchTransactions();
  }, []);

  // Handle input untuk transaksi baru
  const handleInputChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = {
      ...transaction,
      amount: parseFloat(transaction.amount),
    };

    try {
      const response = await fetch("http://localhost:5000/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTransaction),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Transaksi berhasil ditambahkan:", result.transaction);

      setTransactions((prev) => [...prev, result.transaction]);
      setFilteredTransactions((prev) => [...prev, result.transaction]);
      setTotal((prev) => prev + result.transaction.amount);

      setTransaction({ date: "", amount: "", category: "", label: "" });
    } catch (error) {
      console.error("Error saat menambahkan transaksi:", error.message);
    }
  };

  // Handle input untuk filter
  const handleFilterChange = (e) => {
    const newFilters = { ...filters, [e.target.name]: e.target.value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters) => {
    const filtered = transactions.filter((t) => {
      const matchCategory =
        !currentFilters.category || t.category === currentFilters.category;
      const matchLabel =
        !currentFilters.label || t.label === currentFilters.label;
      return matchCategory && matchLabel;
    });

    setFilteredTransactions(filtered);
    const totalAmount = filtered.reduce((sum, t) => sum + t.amount, 0);
    setTotal(totalAmount);
  };

  const resetFilters = () => {
    setFilters({ category: "", label: "" });
    setFilteredTransactions(transactions);
    const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0);
    setTotal(totalAmount);
  };

  return (
    <Box sx={{ padding: 4, maxWidth: 800, margin: "0 auto" }}>
      {/* Input Transaksi */}
      <Card sx={{ marginBottom: 4 }}>
        <CardHeader title="Input Transaksi Baru" />
        <CardContent>
          <Box component="form" onSubmit={handleFormSubmit}>
            <TextField
              label="Tanggal"
              type="date"
              name="date"
              value={transaction.date}
              onChange={handleInputChange}
              sx={{ width: "100%", marginBottom: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Jumlah"
              type="number"
              name="amount"
              value={transaction.amount}
              onChange={handleInputChange}
              sx={{ width: "100%", marginBottom: 2 }}
            />
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <InputLabel>Kategori</InputLabel>
              <Select
                name="category"
                value={transaction.category}
                onChange={handleInputChange}
                label="Kategori"
              >
                <MenuItem value="Makanan">Makanan</MenuItem>
                <MenuItem value="Transportasi">Transportasi</MenuItem>
                <MenuItem value="Hiburan">Hiburan</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <InputLabel>Label</InputLabel>
              <Select
                name="label"
                value={transaction.label}
                onChange={handleInputChange}
                label="Label"
              >
                <MenuItem value="Primer">Primer</MenuItem>
                <MenuItem value="Sekunder">Sekunder</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" fullWidth>
              Tambahkan Transaksi
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Filter Transaksi */}
      <Card sx={{ marginBottom: 4 }}>
        <CardHeader title="Filter Transaksi" />
        <CardContent>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Kategori</InputLabel>
            <Select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              label="Kategori"
            >
              <MenuItem value="">Semua</MenuItem>
              <MenuItem value="Makanan">Makanan</MenuItem>
              <MenuItem value="Transportasi">Transportasi</MenuItem>
              <MenuItem value="Hiburan">Hiburan</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Label</InputLabel>
            <Select
              name="label"
              value={filters.label}
              onChange={handleFilterChange}
              label="Label"
            >
              <MenuItem value="">Semua</MenuItem>
              <MenuItem value="Primer">Primer</MenuItem>
              <MenuItem value="Sekunder">Sekunder</MenuItem>
            </Select>
          </FormControl>
          <Button variant="outlined" onClick={resetFilters} fullWidth>
            Reset Filter
          </Button>
        </CardContent>
      </Card>

      {/* Tabel Transaksi */}
      <TableContainer component={Paper} sx={{ marginBottom: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Tanggal</TableCell>
              <TableCell align="center">Jumlah</TableCell>
              <TableCell align="center">Kategori</TableCell>
              <TableCell align="center">Label</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTransactions.map((t, index) => (
              <TableRow key={index}>
                <TableCell align="center">{t.date}</TableCell>
                <TableCell align="center">{t.amount}</TableCell>
                <TableCell align="center">{t.category}</TableCell>
                <TableCell align="center">{t.label}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Total Pengeluaran */}
      <Typography variant="h6" align="center">
        Total Pengeluaran: Rp {total.toLocaleString()}
      </Typography>
    </Box>
  );
}

export default FinancialTracker;
