import { useState } from "react";
import * as React from "react";
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
function SignIn({ props }) {
  const [bicicletas, setBicicleta] = React.useState({ usuario: {} });

  React.useEffect(() => {
    Api.get("bicicleta/bicicleta/" + sessionStorage.getItem("idBicicleta"))
      .then((res) => {
        setBicicleta(res.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const history = useHistory();
  const [timeAlugar, setTimeAlugar] = useState("");
  const [timeReserva, setTimeReserva] = useState("");
  const [dataValor, setDataValor] = useState("");
  const idUsuario = sessionStorage.getItem("idUsuario");

  console.log("timeAlugar :", timeAlugar);
  console.log("timeReserva :", timeReserva);

  function cadastrarHora(e) {
    var data = new Date(Date.now());
    //  new Date(data).setMinutes(Number(timeAlugar.substring(3, 5)) + 30);
    data.setHours(data.getHours() + Number(timeAlugar.substring(0, 2)));
    data.setMinutes(
      data.getMinutes() + Number(timeAlugar.substring(3, 5)) + 30
    );

    console.log(bicicletas.id + "teste");

    Api.post("http://localhost:8080/locacao/cadastrar-locacao", {
      formaPagamento: "",
      dataHoraLocacao: new Date(Date.now()),
      dataHoraDevolucao: data,
      bicicleta: { id: bicicletas.id },
      usuarioLocatario: { id: idUsuario },
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
          <h2>{bicicletas.marca}</h2>
          <p>{bicicletas.tamanhoAro}</p>
          <TabLayout />
        </RowBlockLeft>
        <RowBlockRight>
          <div class="imagem">
            {bicicletas.imagem ? (
              <img
                src={
                  "http://localhost:8080/bicicleta/bicicleta-imagem/" +
                  bicicletas.id
                }
                width={"400px"}
              ></img>
            ) : (
              <img
                src="https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"
                width={"400px"}
              ></img>
            )}
          </div>
        </RowBlockRight>
      </ColBlocks>
      <ColBlocks>
        <RowBlockLeft>
          <img src={Proprietaria} alt="" />
        </RowBlockLeft>
        <RowBlockRight>
          <h2>{bicicletas.usuario.nome}</h2>
          <p>{bicicletas.usuario.sobrenome}</p>

          <h1>{bicicletas.usuario.telefone}</h1>
          <p>{bicicletas.usuario.email}</p>
          <TabLayout />
        </RowBlockRight>
      </ColBlocks>
      <BlockTitle2>
        <h1>Tempo que irá alugar:</h1> <TimePicker setTime={setTimeAlugar} />
      </BlockTitle2>
      <BlockTitle2></BlockTitle2>
      <ButtonStyle>
        <GeneralButton button="Cadastrar" click={cadastrarHora} />
      </ButtonStyle>
      <Footer />
    </>
  );
}

export default SignIn;
