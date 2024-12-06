import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FormControl = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city.trim()) {
      //dopo aver impazzito, il trim è per far si che se dovessi scrivere "    Bari    ", mi legge comunque solo "Bari"
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=90b5a70348388bcd6aee0a11ade1d2ed`
        );
        const resp = await response.json();

        if (resp.cod === 200) {
          // Ottieni latitudine e longitudine dalla risposta dell'API
          const { lat, lon } = resp.coord;
          // Naviga alla pagina del meteo passando lat e lon come parametri
          console.log(lat, lon);
          navigate(`/weather/${lat}/${lon}`);
        } else {
          console.log("Città non trovata. Riprova!");
        }
      } catch (err) {
        console.err("Si è verificato un errore. Riprova più tardi.", err);
      }
    }
  };

  return (
    <Form className="text-center mt-4" onSubmit={handleSubmit}>
      <Form.Label
        className="fs-1"
        style={{ color: "#5a7d45", textShadow: "2px 2px 5px green" }}
      >
        Inserisci qui la città...
      </Form.Label>
      <div className="d-flex justify-content-center">
        <Form.Control
          type="search"
          placeholder="Cerca una località..."
          aria-label="Search"
          value={city}
          style={{ width: "50%" }}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="outline-success" className="ms-2" type="submit">
          Cerca
        </Button>
      </div>
    </Form>
  );
};
export default FormControl;
