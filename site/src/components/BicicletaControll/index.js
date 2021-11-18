import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { useHistory } from "react-router";
import { CardStyle } from "./style";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

const Input = styled("input")({
  display: "none",
});

function BicicletaControll({ props }) {
  const Input = styled("input")({
    display: "none",
  });
  const history = useHistory();

  return (
    <>
      {props.map((item) => {
        return (
          <CardStyle>
            <div class="imagem">
              {item.imagem ? (
                <img src={item.imagem}></img>
              ) : (
                <div class="upload">
                  <label htmlFor="upload-file">
                    <Input accept="image/*" id="upload-file" type="file" />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      size="large"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                  adicionar imagem...
                </div>
              )}
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

      <Button
        variant="contained"
        color="success"
        onClick={() => {
          history.push("/bike");
        }}
        endIcon={<AddIcon />}
      >
        Adicionar bicicleta
      </Button>
    </>
  );
}

export default BicicletaControll;
