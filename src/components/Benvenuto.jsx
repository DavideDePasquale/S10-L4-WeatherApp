import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import { Sun, Cloudy, Snow, CloudRainFill } from "react-bootstrap-icons";

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
      <h5 className="text-center mt-5">
        Se vuoi cercare il meteo nella tua città, clicca qui <ArrowRight />{" "}
        <Link to="/Home">
          <Sun className="me-3" style={{ fontSize: "40px" }} />
          <Cloudy className="me-3" style={{ fontSize: "40px" }} />
          <Snow className="me-3" style={{ fontSize: "40px" }} />
          <CloudRainFill className="me-3" style={{ fontSize: "40px" }} />
        </Link>
      </h5>
    </>
  );
};
export default Benvenuto;
