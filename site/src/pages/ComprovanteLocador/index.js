import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Bibi from "../../assets/bibi.png";
import GeneralInput from "../../components/GeneralInput";
import GeneralInputPssw from "../../components/GeneralInputPssw";
import GeneralButton from "../../components/GeneralButton";
import { Link } from "react-router-dom";


import { RowBlockLeft, RowBlockRight, ColBlocks, TitleComprovante } from "./style";

const ComprovanteLocador = () => {
  return (
    <>
      <Navbar />
      <TitleComprovante>
        <h1>COMPROVANTE</h1>
      </TitleComprovante>
      <ColBlocks>
        <RowBlockLeft>
          <h1>Bicicleta Caloi Two Niner</h1>
          <h2>Aro 29</h2>
          <h1><i>R$ 00,00</i></h1>

          <h4><b>LOCADOR:</b> <span> Vitória Jeniffer</span></h4>
          <h4><b>LOCATÁRIO:</b> <span>Julio Vitor Silveira</span></h4>
          <h4><b>BICICLETA:</b> <span>Caloi Two Niner</span></h4>
          <h4><b>CEP:</b> <span>03447-170</span></h4>
          <h4><b>ENDEREÇO:</b> <span>Rua Camilo Mazza</span></h4>
          <h4><b>BAIRRO:</b> <span>Vila Carrão</span></h4>
        </RowBlockLeft>
        <RowBlockRight>
          <img src={Bibi} alt="" />
          <h2>00:00</h2>
          <Link to="/card">
          <GeneralButton button="CONFIRMAR DEVOLUÇÃO" />
          </Link>
        </RowBlockRight>
      </ColBlocks>

      <Footer />  
    </>
  );
};

export default ComprovanteLocador;