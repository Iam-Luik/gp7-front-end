import {CardStyle} from './style';
import GeneralButton from '../GeneralButton/index'
function BicicletaCard({props}) {
    return (
      <>
        <CardStyle>
            <div class="imagem">
                <img src={props.imagem}></img>
            </div>
            <h1>{props.titulo}</h1>
            <p>{props.preco}</p>
            <div class="divisor"></div>
            <GeneralButton button="Ver mais"></GeneralButton>
        </CardStyle>
      </>
    );
  }
  
  export default BicicletaCard;
  