import {CardStyle} from './style';
import GeneralButton from '../GeneralButton/index'
import { Link } from "react-router-dom";

function CardStatusBicicleta({props}) {
    return (
      <>
        {props.map((item) => (
            <CardStyle>
            <div class="imagem">
                <img src={item.imagem}></img>
            </div>
            <h1>{item.titulo}</h1>
            <p>{item.preco}</p>
            <div class="divisor"></div>
        </CardStyle>
        ))}
        
      </>
    );
  }
  
  export default CardStatusBicicleta;
  