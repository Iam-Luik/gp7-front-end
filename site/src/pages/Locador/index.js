import NavbarLogado from "../../components/NavbarLogado";
import Footer from "../../components/Footer";
import BicicletaControll from "../../components/BicicletaControll";
import { Container } from "./style";
import Api from "../../services/api";
import React, { useState, useEffect } from "react";

function Locador() {
  return (
    <>
      <NavbarLogado />

      <Container>
        <BicicletaControll></BicicletaControll>
      </Container>

      {/* <Link to="/bike">
        <GeneralButton button="ADICIONAR" />
        </Link> */}
      <Footer />
    </>
  );
}

export default Locador;
