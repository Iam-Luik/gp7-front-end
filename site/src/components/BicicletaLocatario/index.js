import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Api from "../../services/api";
import { CardStyle, Error } from "./style";

const Input = styled("input")({
  display: "none",
});

function BicicletaLocatario(props) {
  const Input = styled("input")({
    display: "none",
  });
  const history = useHistory();

  const [hour, setHour] = useState();
  const [min, setMin] = useState();
  const [seg, setSeg] = useState();
  const [bicicletas, setBicicletas] = React.useState([]);

  const idUsuario = sessionStorage.getItem("idUsuario");

  React.useEffect(() => {
    Api.get("locacao/consultar-locacao-uso/" + idUsuario)
      .then((res) => {
        setBicicletas(res.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function handleImagem(id) {
    sessionStorage.setItem("idLocacao", id);
    history.push("/comprovanteLocador");
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
                  {item.bicicleta.imagem ? (
                    <>
                      <img
                        src={
                          "http://localhost:8080/bicicleta/bicicleta-imagem/" +
                          item.bicicleta.id
                        }
                      ></img>
                    </>
                  ) : (
                    <img src="https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"></img>
                  )}
                </div>
                <div>
                  <h1>{item.bicicleta.marca}</h1>
                  <p>{item.bicicleta.modelo}</p>
                </div>

                <div class="botoes">
                  <Button
                    onClick={() => handleImagem(item.bicicleta.id)}
                    variant="contained"
                    color="success"
                  >
                    Comprovante
                  </Button>
                </div>
              </CardStyle>
            );
          })}
        </>
      ) : (
        <Error></Error>
      )}

      <Tooltip title="Clique aqui para alugar uma nova bicicleta">
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => {
            history.push("/bicicleta-filtro");
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
}

export default BicicletaLocatario;
