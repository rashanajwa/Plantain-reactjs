import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./pages/navbar";
import HomePage from "./pages/homePage";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import FooterComponent from "./pages/footer";
import CNNConceptPage from "./pages/cnn-concept";

function App() {
  return (
    <div className="App">
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Navbar />
      <HomePage />
      {/* <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/nn" element={<CNNConceptPage />}></Route>
      </Routes> */}
      <FooterComponent />
    </div>
  );
}

export default App;
