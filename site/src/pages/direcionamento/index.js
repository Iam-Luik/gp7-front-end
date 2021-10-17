import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GeneralButton from "../../components/GeneralButton";
import { Link } from "react-router-dom";

import {
  RowBlockLeft,
  ColBlocks,
} from "./style";

const Direcionamento = () => {
  return (
    <>
      <Navbar />

        <ColBlocks>
          <RowBlockLeft>
            <h1>O que você busca?</h1>
            <h2>Nos infome qual será sua finalidade em nosso site   </h2>
            <Link to="/locatario">
            <GeneralButton id="Alugar" button="Alugar bicicleta" />
            </Link>
            <Link to="/locador">
            <GeneralButton id="Arrentar" button="Arrentar bicicleta" />
            </Link>
            <span></span>
          </RowBlockLeft>
        </ColBlocks>
      <Footer />
    </>
  );
};

export default Direcionamento;
