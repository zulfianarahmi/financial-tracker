import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const cards = [
  {
    id: 1,
    title: "Transaksi Harian",
    description:
      "Catat pemasukan dan pengeluaran dengan mudah, termasuk tanggal, jumlah, dan kategori (contoh: Makanan, Transportasi, Hiburan).",
  },
  {
    id: 2,
    title: "Analisis Mingguan & Bulanan",
    description:
      "Tampilkan dan filter transaksi berdasarkan minggu atau bulan untuk memahami pola pengeluaran/pemasukan.",
  },
  {
    id: 3,
    title: "Kategori & Total Pengeluaran",
    description:
      "Kelompokkan transaksi berdasarkan kategori untuk melihat total pengeluaran atau pemasukan per kategori dengan cepat.",
  },
];

function FinancialTracker() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // Membawa konten ke bagian atas
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: "10vh", // Geser grid ke bawah sedikit dari atas
        paddingBottom: "20vh", // Tambahkan ruang untuk perhitungan di bawah
        gap: 2,
      }}
    >
      {/* Card Section */}
      <Box
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
          <Card key={card.id} sx={{ width: 300 }}>
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
              <CardContent sx={{ height: "100%" }}>
                <Typography variant="h5" component="div">
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
    </Box>
  );
}

export default FinancialTracker;
