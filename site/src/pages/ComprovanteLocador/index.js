import { Link } from "react-router-dom";
import Bibi from "../../assets/bibi.png";
import Footer from "../../components/Footer";
import Countdown from "../../components/Countdown";
import GeneralButton from "../../components/GeneralButton";
import NavbarPadrao from "../../components/NavbarPadrao";
import Api from "../../services/api";
import React, { useState, useEffect } from "react";

import {
  ColBlocks,
  RowBlockLeft,
  RowBlockRight,
  TitleComprovante,
} from "./style";

const ComprovanteLocador = () => {
  const [dados, setDados] = useState({bicicleta: {usuario: {endereco: {}}}});

  useEffect(() => {
    Api.get("http://localhost:8080/locacao/consultar-locacao/" + sessionStorage.getItem("idLocacao"))
    .then((response) => {
      // console.log(response.data)
      setDados(response.data)
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);

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
            <b>LOCADOR:</b> <span>{dados.bicicleta.usuario.nome} {dados.bicicleta.usuario.sobrenome}</span>
          </h4>
          <h4>
            <b>LOCATÁRIO:</b> <span>Julio Vitor Silveira</span>
          </h4>
          <h4>
            <b>BICICLETA:</b> <span>{dados.bicicleta.marca} {dados.bicicleta.modelo}</span>
          </h4>
          <h4>
            <b>CEP:</b> <span>{dados.bicicleta.usuario.endereco.cep}</span>
          </h4>
          <h4>
            <b>ENDEREÇO:</b> <span>{dados.bicicleta.usuario.endereco.rua} - {dados.bicicleta.usuario.endereco.numero}</span>
          </h4>
          <h4>
            <b>BAIRRO:</b> <span>{dados.bicicleta.usuario.endereco.bairro}</span>
          </h4>
        </RowBlockLeft>
        <RowBlockRight>
          <img src={"http://localhost:8080/bicicleta/bicicleta-imagem/" + dados.bicicleta.id} alt="" width={"400px"}/>
          <Countdown />
          <Link to="/cardLocador">
            <GeneralButton button="CONFIRMAR DEVOLUÇÃO" />
          </Link>
        </RowBlockRight>
      </ColBlocks>

      <Footer />
    </>
  );
};

export default ComprovanteLocador;
