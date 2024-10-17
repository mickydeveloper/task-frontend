import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import Info from "./Info/Info";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="info" element={<Info />} />
      </Routes>
      <Footer />
    </Router>
  );
}
