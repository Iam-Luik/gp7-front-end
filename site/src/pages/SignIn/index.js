import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GeneralInput from "../../components/GeneralInput";
import GeneralInputPssw from "../../components/GeneralInputPssw";
import GeneralButton from "../../components/GeneralButton";
import { Link } from "react-router-dom";

import { RowBlocks, RowBlock, InputContainer } from "./style";

const SignIn = () => {

  return (
    <>
      <Navbar />
      {/* Sing In */}
      <RowBlock>
      <h1>ENTRAR</h1>
        <p>Utilize seus dados cadastrais para entrar no aplicativo</p>
        <InputContainer>
          <GeneralInput label="Email *" />
          </InputContainer>
          <InputContainer>
          <GeneralInputPssw label="Senha *" />
          </InputContainer>
          <h3>Esqueceu a senha?</h3>
          <Link to="/card">
      <GeneralButton button="Entrar" />
      </Link>
      </RowBlock>
      <Footer />
    </>
  );
};

export default SignIn;
