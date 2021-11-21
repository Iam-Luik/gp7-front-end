import { useState } from "react";
import NavbarPadrao from "../../components/NavbarPadrao";
import Footer from "../../components/Footer";
import TabLayout from "../../components/TabLayout/index";
import Bibi from "../../assets/bibi.png";
import Proprietaria from "../../assets/proprietaria.png";
import GeneralButton from "../../components/GeneralButton";
import Api from "../../services/api";
import { useHistory } from "react-router";

import TimePicker from "../../components/TimePicker";

import {
  BlockTitle,
  BlockTitle2,
  RowBlockLeft,
  RowBlockRight,
  ColBlocks,
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
  const history = useHistory();
  const [timeAlugar, setTimeAlugar] = useState("");
  const [timeReserva, setTimeReserva] = useState("");
  const [dataValor, setDataValor] = useState("");

  console.log("timeAlugar :", timeAlugar);
  console.log("timeReserva :", timeReserva);

  function cadastrarHora(e) {
    var data = new Date(Date.now());
    //  new Date(data).setMinutes(Number(timeAlugar.substring(3, 5)) + 30);
    data.setHours(data.getHours() + Number(timeAlugar.substring(0, 2)));
    data.setMinutes(data.getMinutes() + Number(timeAlugar.substring(3, 5)) + 30);

    Api.post("http://localhost:8080/locacao/cadastrar-locacao", {
      formaPagamento: "",
      dataHoraLocacao: new Date(Date.now()),
      dataHoraDevolucao: data,
    })
      .then((response) => {
        history.push("/comprovanteLocador");
        console.log("Cadastrado com sucesso: ", response);
        sessionStorage.setItem("idLocacao", response.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <>
      <NavbarPadrao />
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
        <h1>Tempo que irá alugar:</h1> <TimePicker setTime={setTimeAlugar} />
      </BlockTitle2>
      <BlockTitle2>
        <h1>Tempo de reserva:</h1> <TimePicker setTime={setTimeReserva} />
      </BlockTitle2>
      <ButtonStyle>
        {/* <form onSubmit={cadastrarHora}>
      <GeneralButton type="submit" button="Reservar" />
        </form> */}
        <GeneralButton button="Cadastrar" click={cadastrarHora} />
      </ButtonStyle>
      <Footer />
    </>
  );
};

export default SignIn;
