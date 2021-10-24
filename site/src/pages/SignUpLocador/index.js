import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GeneralButton from "../../components/GeneralButton";

import { RowBlock, InputContainer } from "./style";
import { Link } from "react-router-dom";
import Input from "../../components/Input"

const SignUpLocador = () => {

  return (
    <>
      <Navbar />
      <RowBlock>
      <h1>Cadastro locador</h1>
        <p>Digite aqui seus dados cadastrais para entrar em nosso site</p>
        <InputContainer>
          <Input label="Email" placeholder="email@email.com.br"/>
          <Input label="Senha" placeholder="digite sua senha aqui"/>
        
          <Input label="Nome" placeholder="José"/>
          <Input label="Sobrenome" placeholder="Alves Santos"/>
    
          <Input label="Cpf" placeholder="000.000.000-00"/>
          <Input label="Telefone" placeholder="(00)0000-0000"/>

          <Input label="Cep" placeholder="00000-000"/>
          <Input label="Estado" placeholder="São Paulo"/>


          <Input label="Cidade" placeholder="São Paulo"/>
          <Input label="Bairro" placeholder="Consolação"/>


          <Input label="Rua" placeholder="Haddock Lobo"/>
          <Input label="Numero" placeholder="4001"/>
        </InputContainer>
        <Link to="/login">
        <GeneralButton button="Cadastrar" />
        </Link>
      </RowBlock>


      <Footer />
    </>
  );
};

export default SignUpLocador;
