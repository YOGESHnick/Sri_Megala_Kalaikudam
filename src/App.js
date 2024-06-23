import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { Navbar } from './components/NavBar';
// import Footer from './components/Footer'; // Uncomment if you have a Footer component
import Home from './pages/Home';
import Contact from './pages/Contact';

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans, sans-serif',
    serif: {
      fontFamily: 'Noto Serif, serif',
    },
    bebasNeue: {
      fontFamily: 'Bebas Neue, sans-serif',
    },
    ptSerif: {
      fontFamily: 'PT Serif, serif',
    },
    subtitle1: {
      fontSize: 24,
      color: '#101010',
      fontFamily: 'Noto Serif, serif',
    },
    body1: {
      '@media (max-width: 960px)': { // updated breakpoint notation
        fontSize: 16,
      },
      color: '#000000',
      fontWeight: 400,
      fontSize: 20,
    },
    body2: {
      color: '#101010',
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.4,
    },
    h1: {
      '@media (max-width: 960px)': { // updated breakpoint notation
        fontSize: 40,
      },
      fontSize: 60,
      fontWeight: 700,
      fontFamily: 'Noto Serif, serif',
    },
    h2: {
      '@media (max-width: 960px)': { // updated breakpoint notation
        fontSize: 32,
      },
      color: '#1F1F1F',
      fontSize: 48,
      fontWeight: 700,
      fontFamily: 'Noto Serif, serif',
    },
    h3: {
      '@media (max-width: 960px)': { // updated breakpoint notation
        fontSize: 28,
      },
      color: '#1F1F1F',
      fontSize: 40,
      fontWeight: 700,
      fontFamily: 'Noto Serif, serif',
    },
    h4: {
      '@media (max-width: 960px)': { // updated breakpoint notation
        fontSize: 24,
      },
      fontSize: 32,
      fontWeight: 700,
      fontFamily: 'Noto Serif, serif',
    },
    h5: {
      fontSize: 20,
      fontWeight: 700,
      fontFamily: 'Noto Serif, serif',
    },
    h6: {
      fontFamily: 'Noto Serif, serif',
      fontWeight: 700,
    }
  },
  palette: {
    brand: "#B19540",
    primary: {
      main: "#B19540",
    }
  },
  shape: {
    borderRadius: 0,
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
              <Route path="/contact" element={<Contact />} />
            </Routes>
            {/* <Footer /> */}
          </Router>
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
