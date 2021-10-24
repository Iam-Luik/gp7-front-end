import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GeneralButton from "../../components/GeneralButton";
import { Link } from "react-router-dom";
import Input from "../../components/Input"

import {  RowBlock,  } from "./style";

const SignIn = () => {

  return (
    <>
      <Navbar />
      <RowBlock>
        <div>
          <h1>Entrar</h1>
            <p>Utilize seus dados cadastrais para entrar no aplicativo</p>
                <Input label="Email" placeholder="email@email.com.br"/>
                <Input label="Senha" placeholder="digite aqui sua senha" type="password"/>
              <h3>Esqueceu a senha?</h3>
              <Link to="/card">
            <GeneralButton button="Entrar" />
          </Link>
        </div> 
      </RowBlock>
      <Footer />
    </>
  );
};

export default SignIn;
