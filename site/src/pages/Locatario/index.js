import React from "react";
import BicicletaLocatario from "../../components/BicicletaLocatario";
import Footer from "../../components/Footer";
import NavbarLogado from "../../components/NavbarLogado";
import { Container } from "./style";

function Locador() {
  return (
    <>
      <NavbarLogado />

      <Container>
        <BicicletaLocatario></BicicletaLocatario>
      </Container>

      {/* <Link to="/bike">
        <GeneralButton button="ADICIONAR" />
        </Link> */}
      <Footer />
    </>
  );
}

export default Locador;
