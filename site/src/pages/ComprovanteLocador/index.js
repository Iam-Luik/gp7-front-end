import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Countdown from "../../components/Countdown";
import Footer from "../../components/Footer";
import GeneralButton from "../../components/GeneralButton";
import NavbarPadrao from "../../components/NavbarPadrao";
import Api from "../../services/api";
import {
  ColBlocks,
  RowBlockLeft,
  RowBlockRight,
  TitleComprovante,
} from "./style";

const ComprovanteLocador = () => {
  const history = useHistory();

  const [dados, setDados] = useState({
    usuarioLocatario: {},
    bicicleta: { usuario: { endereco: {} } },
  });
  const [usuario, setUsuario] = React.useState({});
  const idUsuario = sessionStorage.getItem("idUsuario");

  useEffect(() => {
    Api.get(
      "http://localhost:8080/locacao/consultar-locacao/" +
      sessionStorage.getItem("idLocacao")
    )
      .then((response) => {
        setDados(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  React.useEffect(() => {
    Api.get("usuario/" + idUsuario)
      .then((res) => {
        setUsuario(res.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function deletar(id) {
    Api.delete("locacao/cancelar/" + id)
      .then((res) => {
        if (usuario.tipoUsuario === "locatario") {
          history.push("/cardLocatario");
        } else {
          history.push("/cardLocador");
        }
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  return (
    <>
      <NavbarPadrao />
      <TitleComprovante>
        <h1>Comprovante</h1>
      </TitleComprovante>
      <ColBlocks>
        <RowBlockLeft>
          <h1>{dados.bicicleta.marca}</h1>
          <h2>{dados.bicicleta.tamanhoAro}</h2>

          <h4>
            <b>LOCADOR:</b>{" "}
            <span>
              {dados.bicicleta.usuario.nome} {dados.bicicleta.usuario.sobrenome}
            </span>
          </h4>
          <h4>
            <b>LOCATÁRIO:</b>{" "}
            <span>
              {/* {usuario.nome} {usuario.sobrenome} */}
              {dados.usuarioLocatario.nome} {dados.usuarioLocatario.sobrenome}
            </span>
          </h4>
          <h4>
            <b>BICICLETA:</b>{" "}
            <span>
              {dados.bicicleta.marca} {dados.bicicleta.modelo}
            </span>
          </h4>
          <h4>
            <b>CEP:</b> <span>{dados.bicicleta.usuario.endereco.cep}</span>
          </h4>
          <h4>
            <b>ENDEREÇO:</b>{" "}
            <span>
              {dados.bicicleta.usuario.endereco.rua} -{" "}
              {dados.bicicleta.usuario.endereco.numero}
            </span>
          </h4>
          <h4>
            <b>BAIRRO:</b>{" "}
            <span>{dados.bicicleta.usuario.endereco.bairro}</span>
          </h4>
        </RowBlockLeft>
        <RowBlockRight>
          <div class="imagem">
            {dados.bicicleta.imagem ? (
              <img
                src={
                  "http://localhost:8080/bicicleta/bicicleta-imagem/" +
                  dados.bicicleta.id
                }
                width={"400px"}
              ></img>
            ) : (
              <img
                src="https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"
                width={"400px"}
              ></img>
            )}
          </div>
          <Countdown />

          <GeneralButton
            click={() => deletar(dados.id)}
            button="CONFIRMAR DEVOLUÇÃO"
          />

          {usuario.tipoUsuario === "locatario" ?
            <Link to="/cardLocatario">
              <GeneralButton button="BICICLETAS" />
            </Link> : <Link to="/cardLocador">
              <GeneralButton button="BICICLETAS" />
            </Link>}
        </RowBlockRight>
      </ColBlocks>

      <Footer />
    </>
  );
};

export default ComprovanteLocador;
