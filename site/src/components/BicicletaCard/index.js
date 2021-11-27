import { CardStyle, CardStyleTxt } from "./style";
import GeneralButton from "../GeneralButton/index";
import { Link } from "react-router-dom";

function BicicletaCard({ props }) {
  return (
    <>
      <CardStyle>
        <div class="imagem">
          {props.imagem ? (
            <img src={"http://localhost:8080/bicicleta/bicicleta-imagem/" + props.id}></img>
          ) : (
            <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"></img>
          )}
        </div>
        <h1>{props.marca}</h1>
        <CardStyleTxt></CardStyleTxt>
        <p>{props.modelo}</p>
        <div class="divisor"></div>
        <Link to="/localization">
          <GeneralButton button="Ver"></GeneralButton>
        </Link>
      </CardStyle>
    </>
  );
}

export default BicicletaCard;
