import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { AccessTime, PieChart, Folder } from "@mui/icons-material";
import "./FeaturesPage.css";

const cards = [
  { id: 1, title: "Transaksi Harian", icon: <AccessTime /> },
  { id: 2, title: "Analisis Mingguan & Bulanan", icon: <PieChart /> },
  { id: 3, title: "Kategori & Total Pengeluaran", icon: <Folder /> },
];

function FinancialTracker() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  const [transaction, setTransaction] = React.useState({
    date: "",
    amount: "",
    category: "",
    label: "",
  });
  const [transactions, setTransactions] = React.useState([]);

  const handleInputChange = (e) =>
    setTransaction({ ...transaction, [e.target.name]: e.target.value });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTransactions([...transactions, transaction]);
    setTransaction({ date: "", amount: "", category: "", label: "" });
  };

  // Filter berdasarkan bulan
  const getMonthlyTransactions = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    return transactions.filter((t) => {
      const date = new Date(t.date);
      return (
        date.getFullYear() === currentYear && date.getMonth() === currentMonth
      );
    });
  };

  // Komponen Tabel Reusable
  const TransactionTable = ({ title, data }) => (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
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
          {data.map((t, index) => (
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
  );

  return (
    <Box sx={{ padding: 2, minHeight: "100vh" }}>
      {/* Section Kartu */}
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {cards.map((card, index) => (
          <Card key={card.id} sx={{ width: 300 }}>
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              sx={{
                backgroundColor:
                  selectedCard === index ? "action.selected" : "inherit",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  {card.icon}
                  {card.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      {/* Form Input */}
      <Box component="form" onSubmit={handleFormSubmit} sx={{ marginTop: 4 }}>
        <TextField
          label="Tanggal"
          type="date"
          name="date"
          value={transaction.date}
          onChange={handleInputChange}
          sx={{ marginBottom: 2, width: "100%" }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Jumlah"
          type="number"
          name="amount"
          value={transaction.amount}
          onChange={handleInputChange}
          sx={{ marginBottom: 2, width: "100%" }}
        />
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>Kategori</InputLabel>
          <Select
            name="category"
            value={transaction.category}
            onChange={handleInputChange}
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
          >
            <MenuItem value="Primer">Kebutuhan Primer</MenuItem>
            <MenuItem value="Sekunder">Kebutuhan Sekunder</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" fullWidth>
          Simpan Transaksi
        </Button>
      </Box>

      {/* Tabel Semua Transaksi */}
      <TransactionTable
        title="Transaksi Bulanan"
        data={getMonthlyTransactions()}
      />
    </Box>
  );
}

export default FinancialTracker;
