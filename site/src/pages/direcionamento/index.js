import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GeneralButton from "../../components/GeneralButton";
import { Link } from "react-router-dom";

import { RowBlock, Container } from "./style";

const Direcionamento = () => {
  return (
    <>
      <Navbar />

      <Container>
        <RowBlock>
          <h1>O que você busca?</h1>
          <p>Nos infome qual será sua finalidade em nosso site</p>
          <Link to="/locatario">
            <GeneralButton id="Alugar" button="Alugar bicicleta" />
          </Link>
          <Link to="/locador">
            <GeneralButton id="Arrentar" button="Arrentar bicicleta" />
          </Link>
          <span></span>
        </RowBlock>
      </Container>
      <Footer />
    </>
  );
};

export default Direcionamento;
