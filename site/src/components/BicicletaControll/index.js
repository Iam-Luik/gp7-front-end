import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import RedoIcon from "@mui/icons-material/Redo";
import Tooltip from "@mui/material/Tooltip";
import UndoIcon from "@mui/icons-material/Undo";
import * as React from "react";
import { useHistory } from "react-router";
import Api from "../../services/api";
import { CardStyle, Error, FloatButtons } from "./style";

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
    data.append("file", document.getElementById("arquivo" + id).files[0]);

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
    Api.get("locacao/consultar-locacao-bicicleta/" + id)
      .then((res) => {
        sessionStorage.setItem("idLocacao", res.data.id);
        history.push("/comprovanteLocador");
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  return (
    <>
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
                      <label htmlFor={"arquivo" + item.id}>
                        <Input
                          accept="image/*"
                          type="file"
                          name="arquivo"
                          id={"arquivo" + item.id}
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
                  <h1>{item.marca + " - " + item.modelo}</h1>
                  <p>{item.preco}</p>
                </div>
                {!item.alocada ? (
                  <div class="botoes">
                    {item.imagem !== null || item.imagem !== null ? (
                      <label htmlFor={"arquivo" + item.id}>
                        <Input
                          accept="image/*"
                          type="file"
                          name="arquivo"
                          id={"arquivo" + item.id}
                          onChange={() => handleImagem(item.id)}
                        />
                        <Button
                          variant="contained"
                          component="span"
                          startIcon={<PhotoCamera />}
                        >
                          Editar Imagem
                        </Button>
                      </label>
                    ) : (
                      <span></span>
                    )}
                    <Button
                      onClick={() => handleRemover(item.id)}
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                    >
                      Remover bicicleta
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button
                      onClick={() => locadorTela(item.id)}
                      variant="contained"
                      color="success"
                    >
                      Comprovante
                    </Button>
                  </>
                )}
              </CardStyle>
            );
          })}
        </>
      ) : (
        <Error></Error>
      )}

      <FloatButtons>
        <Tooltip title="Clique aqui para cadastrar uma nova bicicleta">
          <Fab
            color=""
            aria-label="add"
            onClick={() => {
              history.push("/bike");
            }}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Clique aqui para remover última bicicleta cadastrada">
          <Fab
            color="secondary"
            aria-label="add"
            onClick={() => ultimaRemover()}
          >
            <UndoIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Clique aqui para desfazer última remoção">
          <Fab color="primary" aria-label="add" onClick={() => ultimaAdd()}>
            <RedoIcon />
          </Fab>
        </Tooltip>
      </FloatButtons>
    </>
  );
}

export default BicicletaControll;
