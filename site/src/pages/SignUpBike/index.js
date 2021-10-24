import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GeneralInput from "../../components/GeneralInput";
import GeneralInputPssw from "../../components/GeneralInputPssw";
import GeneralButton from "../../components/GeneralButton";
import clips from "../../assets/paper-clip.png";

import { RowBlocks, RowBlock, InputContainer } from "./style";
import { Link } from "react-router-dom";

const SignUpBike = () => {

  return (
    <>
      <Navbar />
      <RowBlock>
      <h1>CADASTRO BICICLETA</h1>
        <p>Digite os dados de sua bicicleta</p>
        <InputContainer>
          <GeneralInput label="Categoria *" />
          <GeneralInput label="Marca *" />
        </InputContainer>
        <InputContainer>
          <GeneralInput label="Modelo *" />
          <GeneralInputPssw label="Tamanho Aro *" />
        </InputContainer>
        <InputContainer>
          <GeneralInput label="Cor *" />
          <GeneralInput label="Nome *" />
        </InputContainer>
<RowBlocks>
        <img src={clips} alt="" /><h2>Anexe aqui algumas fotos de sua <br></br>bicicleta.</h2>
        </RowBlocks>     
        <Link to="/card">   
          <GeneralButton button="Cadastrar bicicleta" />
          </Link>
      </RowBlock>


      <Footer />
    </>
  );
};

export default SignUpBike;
