import NavbarPadrao from "../../components/NavbarPadrao";
import Footer from "../../components/Footer";
import BicicletaControll from "../../components/BicicletaControll";
import { Container } from "./style";
import Api from "../../services/api";
import React, { useState, useEffect } from "react";


const idBike = sessionStorage.getItem("idBike");
const bicicletas = [
  {
    titulo: "E-VIBE ELITE FS PRO",
    preco: "R$ 5,00 por hora",
  },
  {
    imagem:
      "http://localhost:8080/bicicleta/bicicleta-imagem/" + 3,
    titulo: "E-VIBE ELITE FS PRO",
    preco: "R$ 5,00 por hora",
  },
  {
    imagem:
      "http://localhost:8080/bicicleta/bicicleta-imagem/" + 4,
    titulo: "E-VIBE ELITE FS PRO",
    preco: "R$ 5,00 por hora",
  },
  {
    imagem:
      "http://localhost:8080/bicicleta/bicicleta-imagem/" + 5,
    titulo: "E-VIBE ELITE FS PRO",
    preco: "R$ 5,00 por hora",
  },
];

const Locador = () => {
  const [bibicletas, setBicicletas] = React.useState();

  useEffect(() => { });

  return (
    <>
      <NavbarPadrao />

      <Container>
        <BicicletaControll props={bicicletas}></BicicletaControll>
      </Container>

      {/* <Link to="/bike">
        <GeneralButton button="ADICIONAR" />
        </Link> */}
      <Footer />
    </>
  );
};

export default Locador;
