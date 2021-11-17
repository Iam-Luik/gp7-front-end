import { CardStyle, Adicionar } from "./style";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function BicicletaControll({ props }) {
  return (
    <>
      {props.map((item) => {
        return (
          <CardStyle>
            <div class="imagem">
              <img src={item.imagem}></img>
            </div>
            <div>
              <h1>{item.titulo}</h1>
              <p>{item.preco}</p>
            </div>

            <div class="botoes">
              <Button variant="contained">Editar</Button>
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
              >
                Remover
              </Button>
            </div>
          </CardStyle>
        );
      })}
      <Adicionar>
        <Button variant="contained" color="success" endIcon={<AddIcon />}>
          Adicionar bicicleta
        </Button>
      </Adicionar>
    </>
  );
}

export default BicicletaControll;
