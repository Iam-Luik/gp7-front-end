import { CardStyle, CardStyleTxt } from "./style";
import "./style.css";
import GeneralButton from "../GeneralButton/index";
import { Link } from "react-router-dom";
import Api from "../../services/api";
import { useHistory } from "react-router";

function BicicletaCard({ props }) {
  const history = useHistory();

  function localizacao(item) {
    sessionStorage.setItem("idBicicleta", item);
    console.log(item)
    history.push("/rent");
  }

  return (
    <>{props ?

      <CardStyle>
        <div class="imagem">
          {props.imagem ? (
            <img
              src={
                "http://localhost:8080/bicicleta/bicicleta-imagem/" + props.id
              }
            ></img>
          ) : (
            <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"></img>
          )}
        </div>
        <h1>{props.marca}</h1>
        <CardStyleTxt></CardStyleTxt>
        <p>{props.modelo}</p>
        <div class="divisor"></div>
        <GeneralButton
          button="Ver"
          click={() => localizacao(props.id)}
        ></GeneralButton>
      </CardStyle>
      : <></>}</>
  );
}

export default BicicletaCard;
