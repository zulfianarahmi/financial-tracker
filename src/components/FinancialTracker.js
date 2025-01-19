import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { height } from "@mui/system";

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
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 2,
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: "100%", // Untuk mengambil lebar penuh
          maxWidth: 1200, // Membatasi lebar maksimum
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
          gap: 2,
        }}
      >
        {cards.map((card, index) => (
          <Card>
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? "" : "undifined"}
              sx={{
                height: "100%",
                "&[data-active]": {
                  backgroundColor: "action.selected",
                  "&:hover": {
                    backgroundColor: "action.selectedHover",
                  },
                },
              }}
            >
              <cardContent sx={{ height: "100%" }}>
                <Typography variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
              </cardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default FinancialTracker;
