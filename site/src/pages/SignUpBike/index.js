import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GeneralInput from "../../components/GeneralInput";
import Upload from "../../components/Upload";
import InputFile from "../../components/InputFile";
import GeneralInputPssw from "../../components/GeneralInputPssw";
import GeneralButton from "../../components/GeneralButton";
import ButtonFile from "../../components/ButtonFile";
import clips from "../../assets/paper-clip.png";
import txtIcone from "../../assets/txtIcone.png";
import Api from "../../services/api"
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';



import { RowBlocks, RowBlock, InputContainer, TxtContainer } from "./style";
import { Link } from "react-router-dom";



const Input = styled('input')({
  display: 'none',
});


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

  const [valorHora, setValorHora] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tamanhoAro, setTamanhoAro] = useState("");
  const [cor, setCor] = useState("");
  const [velocidade, setVelocidade] = useState("");


  function gravar(e) {
    e.preventDefault();
    Api.post("http://localhost:8080/bicicleta/cadastrar", {
      "marca": marca,
      "modelo": modelo,
      "categoria": categoria,
      "tamanhoAro": tamanhoAro,
      "cor": cor,
      "velocidade": velocidade,
      "valorHora": valorHora
    }).then((resposta) => {
      if (resposta.status === 201) {
        alert("Bicicleta cadastrada com sucesso :)");
      
      }
    }).catch((erro) => {
      console.log(erro)
    })
  
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
          <form onSubmit={gravar}>
            <GeneralInput label="Categoria *" onChange={e => setCategoria(e.target.value)}/>
            <GeneralInput label="Marca *" onChange={e => setMarca(e.target.value)}/>
          </form>
          </InputContainer>
          <InputContainer>
          <form onSubmit={gravar}>
            <GeneralInput label="Modelo *" onChange={e => setModelo(e.target.value)}/>
            <GeneralInput label="Tamanho Aro *"onChange={e => setTamanhoAro(e.target.value)}/>
            </form>
          </InputContainer>
          <InputContainer>
          <form onSubmit={gravar}>
            <GeneralInput label="Cor *" onChange={e => setCor(e.target.value)}/>
            <GeneralInput label="Velocidade *"onChange={e => setVelocidade(e.target.value)}/>
            </form>
          </InputContainer>
          <RowBlocks>
         
            <TxtContainer>
              <h3>Envie todas suas bicicletas de uma só vez, clique na imagem.</h3>
              <ButtonFile source={txtIcone} click={baixarArquivo} />
            </TxtContainer>
            
            
              <div>
         <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
           </div> 
            <h3>Adicione o arquivo com os dados de suas bicicletas.</h3>
            
            <img  src={clips} alt="" /><h2>Anexe aqui algumas fotos de sua bicicleta.</h2>
          </RowBlocks>
          <form onSubmit={gravar}>
          <GeneralButton type="submit" button="Cadastrar bicicleta" />
          </form>
        </RowBlock>


        <Footer />
      </>
    );
  };

  export default SignUpBike;
