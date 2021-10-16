import { Divisona } from "./style";
import { ButtonStyle } from "./style";

function CardStatusBicicleta({props}) {
    
  return ( 
    <div>
    {
      props.map(
        item => 
          <Divisona>
             <span>
              <img src={item.imagem} alt="" />
              <h1>STATUS: {item.status}</h1>
           
              <b>Locador: {item.locador}</b>
              <b>Horario de entrega</b>
              <b>{item.hora}</b>
      <ButtonStyle>
        <button></button>
      </ButtonStyle>
            </span>
          </Divisona>
      )}
    </div>
    
  );
}

export default CardStatusBicicleta;
