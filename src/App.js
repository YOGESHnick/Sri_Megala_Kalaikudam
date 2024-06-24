import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { Navbar } from "./components/NavBar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Classes from "./pages/Classes";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans, sans-serif",
    serif: {
      fontFamily: "Noto Serif, serif",
    },
    bebasNeue: {
      fontFamily: "Bebas Neue, sans-serif",
    },
    junge: {
      fontFamily: "Junge",
    },
    ptSerif: {
      fontFamily: "PT Serif, serif",
    },
    subtitle1: {
      fontSize: 24,
      color: "#101010",
      fontFamily: "Noto Serif, serif",
    },
    body1: {
      "@media (max-width: 960px)": {
        fontSize: 16,
      },
      color: "#000000",
      fontWeight: 400,
      fontSize: 20,
    },
    body2: {
      color: "#101010",
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.4,
    },
    h1: {
      "@media (max-width: 960px)": {
        fontSize: 40,
      },
      fontSize: 60,
      fontWeight: 700,
      fontFamily: "Noto Serif, serif",
    },
    h2: {
      "@media (max-width: 960px)": {
        fontSize: 32,
      },
      color: "#1F1F1F",
      fontSize: 48,
      fontWeight: 700,
      fontFamily: "Noto Serif, serif",
    },
    h3: {
      "@media (max-width: 960px)": {
        fontSize: 28,
      },
      color: "#1F1F1F",
      fontSize: 40,
      fontWeight: 700,
      fontFamily: "Noto Serif, serif",
    },
    h4: {
      "@media (max-width: 960px)": {
        fontSize: 24,
      },
      fontSize: 32,
      fontWeight: 700,
      fontFamily: "Noto Serif, serif",
    },
    h5: {
      fontSize: 20,
      fontWeight: 700,
      fontFamily: "Noto Serif, serif",
    },
    h6: {
      fontFamily: "Noto Serif, serif",
      fontWeight: 700,
    },
  },
  palette: {
    brand: "#B19540",
    primary: {
      main: "#B19540",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bharathanatyam-and-drawing" element={<Classes />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
