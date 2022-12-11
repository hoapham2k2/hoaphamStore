import { Button, Typography } from "@mui/material";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import MyNavBar from "./components/NavBar/MyNavBar";
import MyFooter from "./components/Footer/MyFooter";
function App() {
  return (
    <div className="App">
      <MyNavBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<div>Register</div>} />
      </Routes>
      <MyFooter />
    </div>
  );
}

export default App;
