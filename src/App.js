import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar";
// import { Footer } from "./components/footer";
import  Home  from "./pages/Home";
import  Contact  from "./pages/Contact";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/contact" element = {<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;