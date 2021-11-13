import React, { useState } from "react";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";
import GeneralButton from "../../components/GeneralButton";
import GeneralInput from "../../components/GeneralInput";
import Navbar from "../../components/Navbar";
import { InputContainer, RowBlock } from "./style";

/** Padrão de formulários a ser seguidos no projeto */
const Codigo = () => {
  /** Define os get e set dos valores */
  const history = useHistory();
  const [codigoDigitado, setCodigoDigitado] = useState("");

  function validar(e) {
    e.preventDefault();
    if (codigoDigitado === sessionStorage.getItem("cod")) {
      sessionStorage.setItem("cod", Math.random() * (1000000 - 10000) + 10000);
      history.push("/senha");
    } else {
      alert("código incorreto!");
    }
    sessionStorage.setItem("cod", Math.random() * (1000000 - 10000) + 10000);
  }

  return (
    <>
      <Navbar />
      <RowBlock>
        <h1>ATUALIZAÇÃO DE SENHA</h1>
        <p>
          Digite o código enviado para seu email para validarmos sua nova senha
        </p>

        <form onSubmit={validar}>
          <InputContainer>
            <GeneralInput
              label="Digite o código *"
              onChange={(e) => setCodigoDigitado(e.target.value)}
            />
          </InputContainer>

          <GeneralButton type="submit" button="Continuar" />
        </form>
      </RowBlock>

      <Footer />
    </>
  );
};

export default Codigo;
