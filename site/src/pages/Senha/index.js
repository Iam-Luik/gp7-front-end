import React, { useState } from "react";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";
import GeneralButton from "../../components/GeneralButton";
import GeneralInput from "../../components/GeneralInput";
import Navbar from "../../components/Navbar";
import Api from "../../services/api";
import { InputContainer, RowBlock } from "./style";

/** Padrão de formulários a ser seguidos no projeto */
const Senha = () => {
  const history = useHistory();
  const [senha, setSenha] = useState("");

  function alterarSenha(e) {
    e.preventDefault();
    Api.put(
      "http://localhost:8080/usuario/alterar-senha/" +
        sessionStorage.getItem("email") +
        "/" +
        senha,
      {}
    )
      .then((resposta) => {
        if (resposta.status === 200) {
          sessionStorage.setItem("cod", resposta.data);
          history.push("/login");
        } else {
          alert("Senha não foi alterada");
        }
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  /** Define os get e set dos valores */
  return (
    <>
      <Navbar />
      <RowBlock>
        <h1>ATUALIZAÇÃO DE SENHA</h1>
        <p>Digite sua nova senha para finalizar</p>

        <form onSubmit={alterarSenha}>
          <InputContainer>
            <GeneralInput
              label="Digite sua nova senha *"
              onChange={(e) => setSenha(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <GeneralInput label="Confirme sua senha *" onChange={""} />
          </InputContainer>

          <GeneralButton type="submit" button="Continuar" />
        </form>
      </RowBlock>

      <Footer />
    </>
  );
};

export default Senha;
