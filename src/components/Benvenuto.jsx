import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import { Sun } from "react-bootstrap-icons";

const Benvenuto = () => {
  return (
    <>
      <h1
        className="text-center"
        style={{ fontSize: "30px", textShadow: "2px 2px 10px black" }}
      >
        Benvenuti in{" "}
        <strong style={{ color: "green", textShadow: "2px 2px 10px green" }}>
          WeatherApp
        </strong>
      </h1>
      <h5 className="text-center">
        Se vuoi cercare il meteo nella tua città, clicca qui <ArrowRight />{" "}
        <Link to="/Meteo">
          <Sun />
        </Link>
      </h5>
    </>
  );
};
export default Benvenuto;
