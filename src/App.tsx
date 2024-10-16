import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div className="main" role="main">
      Main
    </div>
  );
}

function Info() {
  return (
    <div className="main" role="main">
      Info
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="info" element={<Info />} />
      </Routes>
    </Router>
  );
}
