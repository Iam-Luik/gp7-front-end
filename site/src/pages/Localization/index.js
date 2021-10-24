import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Bibi from "../../assets/bibi.png";
import GeneralInput from "../../components/GeneralInput";
import GeneralInputPssw from "../../components/GeneralInputPssw";
import GeneralButton from "../../components/GeneralButton";
import { Link } from "react-router-dom";

import { RowBlockLeft, RowBlockRight, ColBlocks, TitleLocalization } from "./style";

const Localization = () => {
  return (
    <>
      <Navbar />
      <TitleLocalization>
        <h1>Localização</h1>
      </TitleLocalization>
      <ColBlocks>
        <RowBlockLeft>
          <h1>Rua Camilo Mazza</h1>
          <h2>03447-170</h2>
          <h1>Rua Vila do Conde</h1>
          <h2>01134-060</h2>
          <h1>Rua Fábio de Almeida</h1>
          <h2>02318-157</h2>
        </RowBlockLeft>
        <RowBlockRight>
        <h2>Bicicleta Caloi Two Niner</h2>
          <img src={Bibi} alt="" />
        </RowBlockRight>
      </ColBlocks>

      <Link to="/rent">
      <GeneralButton button="Ver Informações" />
      </Link>
      <Footer />  
    </>
  );
};

export default Localization;