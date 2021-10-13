import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Bibi from "../../assets/bibi.png";
import GeneralInput from "../../components/GeneralInput";
import GeneralInputPssw from "../../components/GeneralInputPssw";
import GeneralButton from "../../components/GeneralButton";

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
            <GeneralButton id="Alugar" button="Alugar bicicleta" />
            <GeneralButton id="Arrentar" button="Arrentar bicicleta" />
            <span></span>
          </RowBlockLeft>
        </ColBlocks>
      <Footer />
    </>
  );
};

export default Direcionamento;
