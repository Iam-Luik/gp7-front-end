import {CardStyle, CardStyleTxt} from './style';
import GeneralButton from '../GeneralButton/index'
import { Link } from "react-router-dom";

function BicicletaControll({props}) {
    return (
      <>
        <CardStyle>
            <div class="imagem">
                <img src={props.imagem}></img>
            </div>
            <h1>{props.titulo}</h1>
            <CardStyleTxt></CardStyleTxt>
            <p>{props.preco}</p>
            <div class="divisor"></div>
            <Link to="/localization">
            </Link>
        </CardStyle>
      </>
    );
  }
  
  export default BicicletaControll;
  