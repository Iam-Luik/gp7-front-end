import { useState, useEffect } from 'react'
import Bibi from "../../assets/bibi.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import TabLayout from "../../components/TabLayout/index";
import Proprietaria from "../../assets/proprietaria.png";
import Api from "../../services/api"

import TimePicker from "../../components/TimePicker";

import {
  BlockTitle,
  BlockTitle2,
  ColBlocks,
  RowBlockLeft,
  RowBlockRight,
} from "./style";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
  const [timeAlugar, setTimeAlugar] = useState("");
  const [timeReserva, setTimeReserva] = useState("");

  console.log("timeAlugar :", timeAlugar);
  console.log("timeReserva :", timeReserva);

  function cadastrarHora(e) {
    let valorHora = "";
    let valorMinuto = "";
    Api.post("http://localhost:8080/locacao/cadastrar-locacao", {
      formaPagamento: "",
      dataHoraLocacao: new Date().toISOString(),
      dataHoraDevolucao: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), new Date().getHours() + valorHora, new Date().getMinutes() + valorMinuto, 0, 0).toISOString()
    })
      .then((response) => {
        console.log("Cadastrado com sucesso: ", response);
      })
      .catch((err) => {
        alert(err);
      });
  }

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
        <h1>Tempo que irá alugar:</h1> <TimePicker setTime={setTimeAlugar} />
      </BlockTitle2>
      <BlockTitle2>
        <h1>Tempo de reserva:</h1> <TimePicker setTime={setTimeReserva} />
      </BlockTitle2>
      <Footer />
    </>
  );
};

export default SignIn;
