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
  {
    id: 1,
    title: "Transaksi Harian",
    description:
      "Catat pemasukan dan pengeluaran dengan mudah, termasuk tanggal, jumlah, dan kategori.",
    icon: <AccessTime />,
  },
  {
    id: 2,
    title: "Analisis Mingguan & Bulanan",
    description:
      "Tampilkan dan filter transaksi berdasarkan minggu atau bulan untuk memahami pola pengeluaran/pemasukan.",
    icon: <PieChart />,
  },
  {
    id: 3,
    title: "Kategori & Total Pengeluaran",
    description:
      "Kelompokkan transaksi berdasarkan kategori untuk melihat total pengeluaran atau pemasukan per kategori dengan cepat.",
    icon: <Folder />,
  },
];

function FinancialTracker() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  const [transaction, setTransaction] = React.useState({
    date: "",
    amount: "",
    category: "",
    label: "",
  });
  const [transactions, setTransactions] = React.useState([]); // Array untuk menyimpan semua transaksi

  const handleInputChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTransactions([...transactions, transaction]); // Tambahkan transaksi baru ke dalam array
    setTransaction({ date: "", amount: "", category: "", label: "" }); // Reset form
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: "10vh",
        paddingBottom: "20vh",
        gap: 2,
      }}
    >
      {/* Card Section */}
      <Box
        className="page-background"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          width: "100%",
          maxWidth: 1200,
        }}
      >
        {cards.map((card, index) => (
          <Card key={card.id} sx={{ width: 300 }} className="card">
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              sx={{
                height: "100%",
                "&:hover": {
                  backgroundColor: "action.selected",
                },
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
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      {/* Input Transaksi Section */}
      <Box
        className="page-background"
        component="form"
        onSubmit={handleFormSubmit}
        sx={{
          width: "100%",
          maxWidth: 1200,
          marginTop: 4,
          padding: 2,
          backgroundColor: "#f9f9f9",
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          Masukkan Transaksi
        </Typography>
        <TextField
          label="Tanggal"
          type="date"
          name="date"
          value={transaction.date}
          onChange={handleInputChange}
          sx={{ width: "100%", marginBottom: 2 }}
          InputLabelProps={{
            shrink: true,
          }}
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
            <MenuItem value="Primer">Kebutuhan Primer</MenuItem>
            <MenuItem value="Sekunder">Sekunder</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Simpan Transaksi
        </Button>
      </Box>

      {/* Tabel Data Transaksi */}
      <TableContainer
        component={Paper}
        sx={{ width: "100%", maxWidth: 1200, marginTop: 4 }}
      >
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
            {transactions.map((t, index) => (
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
    </Box>
  );
}

export default FinancialTracker;
