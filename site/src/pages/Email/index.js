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
const Email = () => {

const history = useHistory();
  const [emailSolicitado, setEmailSolicitado] = useState("");

 function enviarEmail(e) {
    e.preventDefault();
    Api.post("http://localhost:8080/usuario/enviar-email-senha/"+ emailSolicitado, {}).then((resposta) => {
      if (resposta.status === 200) {
        localStorage.setItem("cod", resposta.data);
        localStorage.setItem("email", emailSolicitado);
                history.push('/codigo');
      }
    }).catch((erro) => {
      console.log(erro)
    })
  
  }


    /** Define os get e set dos valores */
    return (
        <>
            <Navbar />
            <RowBlock>
                <h1>ATUALIZAÇÃO DE SENHA</h1>
                <p>Digite seu email cadastrado para criar uma nova senha</p>

               
             <form onSubmit={enviarEmail}>
                    <InputContainer>
                    <GeneralInput label="Digite seu email *"  onChange={e => setEmailSolicitado(e.target.value)} />
                    </InputContainer>

                    
                <GeneralButton type="submit" button="Continuar" />
              
                </form>

            </RowBlock>


            <Footer />
        </>
    );
}


export default Email;