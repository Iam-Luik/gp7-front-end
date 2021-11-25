import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useHistory } from "react-router";
import { CardStyle } from "./style";
import Tooltip from "@mui/material/Tooltip";
import Api from "../../services/api";

const Input = styled("input")({
  display: "none",
});

function BicicletaControll({ props }) {
  var numero = Math.random() * (2 - 1);
  const Input = styled("input")({
    display: "none",
  });
  const history = useHistory();

  const idBike = sessionStorage.getItem("idBike");

  const handleSubmit = (event) => {
    event.preventDefault();

    var data = new FormData();
    data.append('file', document.getElementById('arquivo').files[0]);

    //Configura a barra de progresso
    var config = {
      onUploadProgress: function (progressEvent) {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log(percentCompleted);

      }
    };

    Api.post("http://localhost:8080/bicicleta/bicicleta-imagem/" + idBike, data, config)
      .then(function (res) {
        console.log(res.data); //Resposta HTTP
        window.location.href = "/card"
      })
      .catch(function (err) {
        console.log(err.message); //Erro HTTP
      });
  };


  return (
    <Box onSubmit={handleSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": { mt: 2, mb: 2 },
      }}
      noValidate
      autoComplete="off"
    >
      {props.map((item) => {
        return (
          <CardStyle>
            <div class="imagem">
              {item.imagem ? (
                <img src={item.imagem}></img>
              ) : (
                <div class="upload" >
                  <label htmlFor="arquivo">
                    <Input accept="image/*" type="file" name="arquivo" id="arquivo" />
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
              <Button type="submit" variant="contained">Editar</Button>
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

      <Tooltip title="Clique aqui para cadastrar uma nova bicicleta">
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => {
            history.push("/bike");
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </ Box>
  );
}

export default BicicletaControll;
