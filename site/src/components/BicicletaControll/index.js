import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Api from "../../services/api";
import { CardStyle, Error } from "./style";

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

  const idUsuario = sessionStorage.getItem("idUsuario");

  React.useEffect(() => {
    Api.get("bicicleta/bicicleta-por-usuario/" + idUsuario)
      .then((res) => {
        setBicicletas(res.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function handleImagem(id) {
    var data = new FormData();
    data.append("file", document.getElementById("arquivo").files[0]);

    //Configura a barra de progresso
    var config = {
      onUploadProgress: function (progressEvent) {
        var percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(percentCompleted);
      },
    };

    Api.post(
      "http://localhost:8080/bicicleta/bicicleta-imagem/" + id,
      data,
      config
    )
      .then(function (res) {
        console.log(res.data); //Resposta HTTP
        window.location.reload(true);
      })
      .catch(function (err) {
        console.log(err.message); //Erro HTTP
      });
  }
  function handleRemover(id) {
    Api.delete("http://localhost:8080/bicicleta/remover/" + id)
      .then(function (res) {
        console.log(res.data); //Resposta HTTP
        window.location.reload(true);
      })
      .catch(function (err) {
        console.log(err.message); //Erro HTTP
      });
  }

  function ultimaAdd() {
    Api.post("http://localhost:8080/bicicleta/adicionar-ultima")
      .then(function (res) {
        console.log(res.data); //Resposta HTTP
        window.location.href = "/cardLocador";
      })
      .catch(function (err) {
        console.log(err.message); //Erro HTTP
      });
  }

  function ultimaRemover() {
    Api.delete("http://localhost:8080/bicicleta//remover-ultima")
      .then(function (res) {
        console.log(res.data); //Resposta HTTP
        window.location.href = "/cardLocador";
      })
      .catch(function (err) {
        console.log(err.message); //Erro HTTP
      });
  }

  function locadorTela(id) {
    Api.get("locacao/consultar-locacao-locador/" + idUsuario)
      .then((res) => {
        setBicicletas(res.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    sessionStorage.setItem("idLocacao", id);
    history.push("/comprovanteLocador")
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
      {bicicletas.length > 0 ? (
        <>
          {bicicletas.map((item) => {
            return (
              <CardStyle>
                <div class="imagem">
                  {item.imagem ? (
                    <>
                      <img
                        src={
                          "http://localhost:8080/bicicleta/bicicleta-imagem/" +
                          item.id
                        }
                      ></img>
                    </>
                  ) : (
                    <div class="upload">
                      <label htmlFor="arquivo">
                        <Input
                          accept="image/*"
                          type="file"
                          name="arquivo"
                          id="arquivo"
                          onChange={() => handleImagem(item.id)}
                        />
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
                {!item.alocada ? <div class="botoes">
                  {item.imagem !== null || item.imagem !== null ? (
                    <Button variant="contained" startIcon={<PhotoCamera />}>
                      Editar Imagem
                    </Button>
                  ) : (
                    <span></span>
                  )}
                  {/* <Button variant="contained">Editar Imagem</Button> */}
                  <Button
                    onClick={() => handleRemover(item.id)}
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                  >
                    Remover bicicleta
                  </Button>
                </div> : <>
                  <Button
                    onClick={() => locadorTela(item.id)}
                    variant="contained"
                    color="success"
                  >
                    Comprovante
                  </Button>
                </>}

              </CardStyle>
            );
          })}
        </>
      ) : (
        <Error></Error>
      )
      }

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
    </>
  );
}

export default BicicletaControll;
