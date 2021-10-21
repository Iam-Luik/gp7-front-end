import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TabLayout from "../../components/TabLayout/index";
import Bibi from "../../assets/bibi.png";
import Proprietaria from "../../assets/proprietaria.png";
import { SimpleSlider } from "../../components/GeneralCarousel/SimpleSlider";
import Select from "../../components/Select";
import GeneralInput from "../../components/GeneralInput";
import Terms from "../../components/Terms";
import GeneralButton from "../../components/GeneralButton";

import {
  BlockTitle,
  BlockTitle2,
  RowBlockLeft,
  RowBlockRight,
  ColBlocks,
  InputContainer,
  ButtonStyle,
} from "./style";

const tempo = {
  titulo: "categoria",
  valores: [
    {
      value: 1,
      label: "eletrica",
    },
    {
      value: 2,
      label: "manual",
    },
    {
      value: 3,
      label: "bike cross",
    },
  ],
};
const SignIn = () => {
  return (
    <>
      <Navbar />
      <BlockTitle>
        <h1>Contratação</h1>
      </BlockTitle>
      <ColBlocks>
        <RowBlockLeft>
          <h2>Bicicleta Caloi Two Niner</h2>
          <p>Aro 29</p>
          <h1>R$ 00,00</h1>
          <TabLayout />
        </RowBlockLeft>
        <RowBlockRight>
          <img src={Bibi} alt="" />
        </RowBlockRight>
      </ColBlocks>
      <ColBlocks>
        <RowBlockLeft>
          <img src={Proprietaria} alt="" />
        </RowBlockLeft>
        <RowBlockRight>
          <h2>Vitória</h2>
          <p>Feminino</p>
          <h1>(51) 2824-2466</h1>
          <TabLayout />
        </RowBlockRight>
      </ColBlocks>
      <BlockTitle2>
        <h1>Tempo que irá alugar: 00:00</h1>
      </BlockTitle2>
      <BlockTitle2>
        <h1>Tempo de reserva: 00:00</h1>
      </BlockTitle2>
      <BlockTitle2>
        <h1>Pagamento</h1>
      </BlockTitle2>
      <BlockTitle>
        <h1>Cartão de Crédito</h1>
      </BlockTitle>
      <InputContainer>
        <GeneralInput label="Numero *" />
        <GeneralInput label="Vencimento *" />
      </InputContainer>
      <InputContainer>
        <GeneralInput label="Nome do títular *" />
        <GeneralInput label="CVV *" />
      </InputContainer>
      <Terms />
      <ButtonStyle>
        <GeneralButton button="Reservar" />
        <GeneralButton button="Voltar" />
      </ButtonStyle>
      <Footer />
    </>
  );
};

export default SignIn;
