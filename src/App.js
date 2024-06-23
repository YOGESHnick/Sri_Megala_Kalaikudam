import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar";
// import { Footer } from "./components/footer";
import  Home  from "./pages/home";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;