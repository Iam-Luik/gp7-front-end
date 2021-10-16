import { Divisona } from "./style";
import { ButtonStyle, ButtonEdit, ButtonDel } from "./style";

function CardStatusBicicleta({props}) {
  function ValidarStatus(item){
    if(item.status == "Alugada"){
      return <span> 
      <b>Locatario: {item.locatario}</b>
      <b>Entrega</b>
      <b>Dia: {item.dia}</b>
      <b>Horário: {item.hora}</b>
      <ButtonStyle>
      <button>Comprovante</button>
      </ButtonStyle>
     </span>
    } else if(item.locador){
      return <span> <b>Locador: {item.locador}</b>
      <b>Entrega</b>
      <b>Dia: {item.dia}</b>
      <b>Horário: {item.hora}</b>
      <ButtonStyle>
      <button>Devolver</button>
      </ButtonStyle>
     </span>
    }
    return <span id="spanButton">

      <ButtonDel>
      <button>Deletar</button>
      </ButtonDel>
      <ButtonEdit>
      <button>Editar</button>
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
