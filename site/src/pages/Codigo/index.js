import React, { useState } from 'react';
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
import { useHistory } from 'react-router';

/** Padrão de formulários a ser seguidos no projeto */
const Codigo = () => {
    /** Define os get e set dos valores */
const history = useHistory();
const [codigoDigitado, setCodigoDigitado] = useState("");

 function validar(e) {
    e.preventDefault();
   if(codigoDigitado === localStorage.getItem("cod")){
        localStorage.setItem("cod", "sdhfugiuaurhguwieou");
                history.push('/senha');
   }else{
       alert("código incorreto!")
   }
    localStorage.setItem("cod", "xphauigfuashoisdhgyuahsid");
  
  }

    return (
        <>
            <Navbar />
            <RowBlock>
                <h1>ATUALIZAÇÃO DE SENHA</h1>
                <p>Digite o código enviado para seu email para validarmos sua nova senha</p>


                <form onSubmit={validar}>
                <InputContainer>
                    <GeneralInput label="Digite o código *" onChange={e => setCodigoDigitado(e.target.value)} />
                </InputContainer>

             
                    <GeneralButton type="submit" button="Continuar" />
                
                </form>

            </RowBlock>


            <Footer />
        </>
    );
}


export default Codigo;