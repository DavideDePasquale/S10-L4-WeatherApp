import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import FormControl from "./components/FormControl";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsMeteo from "./components/DetailsMeteo";
import Benvenuto from "./components/Benvenuto";
import Contatti from "./components/Contatti";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/Home" element={<Benvenuto />} />
          <Route path="/Meteo" element={<FormControl />} />
          <Route path="/weather/:lat/:lon" element={<DetailsMeteo />} />
          <Route path="/Contatti" element={<Contatti />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
