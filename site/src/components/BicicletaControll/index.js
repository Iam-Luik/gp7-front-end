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
import reactDom from "react-dom";

const Input = styled("input")({
  display: "none",
});

function BicicletaControll(props) {
  var numero = Math.random() * (2 - 1);
  const Input = styled("input")({
    display: "none",
  });
  const history = useHistory();


  const [bicicletas, setBicicletas] = React.useState([]);

  React.useEffect(() => {
    Api.get("bicicleta/todos")
      .then((res) => {

        setBicicletas(res.data)

      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  function handleImagem(id) {

    var data = new FormData();
    data.append('file', document.getElementById('arquivo').files[0]);

    //Configura a barra de progresso
    var config = {
      onUploadProgress: function (progressEvent) {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log(percentCompleted);

      }
    };

    Api.post("http://localhost:8080/bicicleta/bicicleta-imagem/" + id, data, config)
      .then(function (res) {
        console.log(res.data); //Resposta HTTP
        window.location.href = "/card"
      })
      .catch(function (err) {
        console.log(err.message); //Erro HTTP
      });
  }
  function handleRemover(id) {
    Api.delete("http://localhost:8080/bicicleta/remover/" + id)
      .then(function (res) {
        console.log(res.data); //Resposta HTTP
        window.location.href = "/card"
      })
      .catch(function (err) {
        console.log(err.message); //Erro HTTP
      });
  }

  function ultimaAdd() {
    Api.post("http://localhost:8080/bicicleta/adicionar-ultima")
      .then(function (res) {
        console.log(res.data); //Resposta HTTP
        window.location.href = "/card"
      })
      .catch(function (err) {
        console.log(err.message); //Erro HTTP
      });
  }

  function ultimaRemover() {
    Api.delete("http://localhost:8080/bicicleta//remover-ultima")
      .then(function (res) {
        console.log(res.data); //Resposta HTTP
        window.location.href = "/card"
      })
      .catch(function (err) {
        console.log(err.message); //Erro HTTP
      });
  }


  return (
    <>
      {/* <Button onClick={() => ultimaAdd()}
        variant="contained">
        Adicionar ultima
      </Button>
      <Button onClick={() => ultimaRemover()}
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
      >
        Remover ultima

      </Button> */}

      {bicicletas.map((item) => {
        return (
          <CardStyle>
            <div class="imagem">
              {item.imagem ? (
                <>
                  <img src={"http://localhost:8080/bicicleta/bicicleta-imagem/" + item.id}></img>
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
                </>
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
              <h1>{item.marca}</h1>
              <p>{item.preco}</p>
            </div>

            <div class="botoes">
              <Button onClick={() => handleImagem(item.id)}
                variant="contained">
                Editar Imagem
              </Button>
              <Button onClick={() => handleRemover(item.id)}
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
    </ >
  );
}

export default BicicletaControll;
