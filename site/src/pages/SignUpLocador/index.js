import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GeneralInput from "../../components/GeneralInput";
import GeneralInputPssw from "../../components/GeneralInputPssw";
import GeneralButton from "../../components/GeneralButton";

import { RowBlocks, RowBlock, InputContainer } from "./style";
import { Link } from "react-router-dom";

const SignUpLocador = () => {

  return (
    <>
      <Navbar />
      <RowBlock>
      <h1>CADASTRO LOCADOR</h1>
        <p>Digite aqui seus dados cadastrais para gerar um acesso no nosso site</p>
        <InputContainer>
          <GeneralInput label="Email *" />
          <GeneralInput label="Senha *" />
        </InputContainer>
        <InputContainer>
          <GeneralInput label="Nome *" />
          <GeneralInputPssw label="Sobrenome *" />
        </InputContainer>
        <InputContainer>
          <GeneralInput label="CPF *" />
          <GeneralInput label="Telefone *" />
        </InputContainer>

        <RowBlocks></RowBlocks>
        <InputContainer>
          <GeneralInput label="CEP *" />
          <GeneralInput label="Estado *" />
        </InputContainer>
        <InputContainer>
          <GeneralInput label="Cidade *" />
          <GeneralInput label="Bairro *" />
        </InputContainer>
        <InputContainer>
          <GeneralInput label="Rua *" />
          <GeneralInput label="Numero *" />
          </InputContainer>
          <GeneralButton button="Cadastrar" />
      </RowBlock>


      <Footer />
    </>
  );
};

export default SignUpLocador;
