import { Divisona } from "./style";
import { ButtonStyle, ButtonEdit, ButtonDel } from "./style";
import { Link } from "react-router-dom";

function CardStatusBicicleta({props}) {
  function ValidarStatus(item){
    if(item.status == "Alugada"){
      return <span> 
      <b>Locatario: {item.locatario}</b>
      <b>Entrega</b>
      <b>Dia: {item.dia}</b>
      <b>Horário: {item.hora}</b>
      <ButtonStyle>
      <Link to="/comprovanteLocador">
      <button>Comprovante</button>
      </Link>
      </ButtonStyle>
     </span>
    } else if(item.locador){
      return <span> <b>Locador: {item.locador}</b>
      <b>Entrega</b>
      <b>Dia: {item.dia}</b>
      <b>Horário: {item.hora}</b>
      <ButtonStyle>
      <Link to="/comprovanteLocatario">
      <button>Devolver</button>
      </Link>
      </ButtonStyle>
     </span>
    }
    return <span id="spanButton">

      <ButtonDel>
      <button>Deletar</button>
      </ButtonDel>
      <ButtonEdit>
      <Link to="/bike">
      <button>Editar</button>
      </Link>
      </ButtonEdit>
    </span>
  }
  return ( 
    <div>
    {
      props.map(
        item => 
          <Divisona>
             <span>
              <img src={item.imagem} alt="" />
              <h1>{item.status?'STATUS: ' + item.status: null}</h1>
             {ValidarStatus(item)}
            </span>
          </Divisona>
      )}
    </div>
    
  );
}

export default CardStatusBicicleta;
