import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GeneralInput from "../../components/GeneralInput";
import InputFile from "../../components/InputFile";
import GeneralInputPssw from "../../components/GeneralInputPssw";
import GeneralButton from "../../components/GeneralButton";
import ButtonFile from "../../components/ButtonFile";
import clips from "../../assets/paper-clip.png";
import txtIcone from "../../assets/txtIcone.png";
import Api from "../../services/api"

import { RowBlocks, RowBlock, InputContainer, TxtContainer } from "./style";
import { Link } from "react-router-dom";


const SignUpBike = () => {

  var caqui;
  const baixarArquivo = () => {

    Api.get("http://localhost:8080/bicicleta/obter-arquivo/10")
      .then((response) => {
        let data = response.data;
        let blob = new Blob([data], { type: 'text/plain;charset=utf-8;' });
        const link = window.document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'arquivo-bike.txt';
        link.click();
        window.URL.revokeObjectURL(link.href);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  // const Arquivo = () => {
  //   if(input){
  //     console.log("entrou")
  //   }
  // }
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
          <TxtContainer>
            <h3>Envie todas suas bicicletas de uma só vez, clique na imagem.</h3>
            <ButtonFile source={txtIcone} click={baixarArquivo} />
          </TxtContainer>
          
          <input type="file" name="input"/>
          <h3>Adicione o arquivo com os dados de suas bicicletas.</h3>
          <img src={clips} alt="" /><h2>Anexe aqui algumas fotos de sua bicicleta.</h2>
        </RowBlocks>
       
          <GeneralButton button="Cadastrar bicicleta" />
        <button type="submit">teste</button>
      </RowBlock>


      <Footer />
    </>
  );
};

export default SignUpBike;
