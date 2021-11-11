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

/** Padrão de formulários a ser seguidos no projeto */
const Email = () => {
    /** Define os get e set dos valores */
    return (
        <>
            <Navbar />
            <RowBlock>
                <h1>ATUALIZAÇÃO DE SENHA</h1>
                <p>Digite seu email cadastrado para criar uma nova senha</p>

               
        
                    <InputContainer>
                    <GeneralInput label="Digite seu email *" onChange={""} />
                    </InputContainer>

                    <Link to="/codigo">
                <GeneralButton type="submit" button="Continuar" />
                </Link>

            </RowBlock>


            <Footer />
        </>
    );
}


export default Email;