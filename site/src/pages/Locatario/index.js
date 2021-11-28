import React from "react";
import BicicletaLocatario from "../../components/BicicletaLocatario";
import Footer from "../../components/Footer";
import NavbarPadrao from "../../components/NavbarPadrao";
import { Container } from "./style";

function Locador() {

    return (
        <>
            <NavbarPadrao />

            <Container>

                <BicicletaLocatario></BicicletaLocatario>
            </Container>

            {/* <Link to="/bike">
        <GeneralButton button="ADICIONAR" />
        </Link> */}
            <Footer />
        </>
    );
};

export default Locador;
