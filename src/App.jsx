import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import FormControl from "./components/FormControl";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsMeteo from "./components/DetailsMeteo";
import Benvenuto from "./components/Benvenuto";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/Home" element={<Benvenuto />} />
          <Route path="/weather/:lat/:lon" element={<DetailsMeteo />} />
        </Routes>
        <FormControl />
      </BrowserRouter>
    </>
  );
}

export default App;
