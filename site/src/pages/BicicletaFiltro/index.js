import React, { useEffect } from "react";
import BicicletaCard from "../../components/BicicletaCard";
import Footer from "../../components/Footer";
import NavbarLocatario from "../../components/NavbarLocatario";
import Select from "../../components/Select";
import Api from "../../services/api";
import Button from "@mui/material/Button";
import { Section, SelectFilter, Error } from "./style";

const categorias = {
  titulo: "categoria",
  valores: [
    {
      value: "classicos",
      label: "Clássicos",
    },
    {
      value: "eletrica",
      label: "Elétrica",
    },
    {
      value: "estrada",
      label: "Estrada",
    },
    {
      value: "infantil",
      label: "Infantil",
    },
    {
      value: "lazer",
      label: "Lazer",
    },
    {
      value: "montain-bike",
      label: "Mountain Bike",
    },
    {
      value: "urbana",
      label: "Urbana",
    },
  ],
};
const aros = {
  titulo: "tamanho aro",
  valores: [
    {
      value: "aro-26",
      label: "Aro 26",
    },
    {
      value: "aro-29",
      label: "Aro 29",
    },
  ],
};
const cores = {
  titulo: "cor",
  valores: [
    {
      value: "preta",
      label: "Preta",
    },
    {
      value: "cinza",
      label: "Cinza",
    },
    {
      value: "vinho",
      label: "Vinho",
    },
    {
      value: "verde",
      label: "Verde",
    },
    {
      value: "azul",
      label: "Azul",
    },
    {
      value: "grafite",
      label: "Grafite",
    },
  ],
};
const velocidades = {
  titulo: "velocidade",
  valores: [
    {
      value: "7-velocidades",
      label: "7 velocidades",
    },
    {
      value: "9-velocidades",
      label: "9 velocidades",
    },
    {
      value: "21-velocidades",
      label: "21 velocidades",
    },
    {
      value: "24-velocidades",
      label: "24 velocidades",
    },
    {
      value: "18-velocidades",
      label: "18 velocidades",
    },
  ],
};

const BicicletaFiltro = () => {
  const [bicicletas, setBicicletas] = React.useState([]);

  useEffect(() => {
    Api.get("bicicleta/todos")
      .then((response) => {
        setBicicletas(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const [categoria, setCategoria] = React.useState("");

  const handleChangeCategoria = (event) => {
    setCategoria(event.target.value);
  };

  const [aro, setAro] = React.useState("");

  const handleChangeAro = (event) => {
    setAro(event.target.value);
  };

  const [cor, setCor] = React.useState("");

  const handleChangeCor = (event) => {
    setCor(event.target.value);
  };

  const [velocidade, setVelocidade] = React.useState("");

  const handleChangeVelocidade = (event) => {
    setVelocidade(event.target.value);
  };

  const obterBicicletas = () => {
    console.log(categoria, aro, cor, velocidade);
    Api.get(
      `bicicleta/filtrar/${categoria ? categoria : null}/${aro ? aro : null}/${
        cor ? cor : null
      }/${velocidade ? velocidade : null}`
    )
      .then((response) => {
        setBicicletas(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  return (
    <>
      <NavbarLocatario />
      <SelectFilter>
        <Select
          props={categorias}
          handleChange={handleChangeCategoria}
          value={categoria}
        ></Select>

        <Select
          props={aros}
          handleChange={handleChangeAro}
          value={aro}
        ></Select>

        <Select
          props={cores}
          handleChange={handleChangeCor}
          value={cor}
        ></Select>

        <Select
          props={velocidades}
          handleChange={handleChangeVelocidade}
          value={velocidade}
        ></Select>
        <Button variant="contained" onClick={obterBicicletas}>
          Pesquisar
        </Button>
      </SelectFilter>
      {bicicletas.length > 0 ? (
        <Section>
          {bicicletas.map((bicicleta) => {
            return <BicicletaCard props={bicicleta}></BicicletaCard>;
          })}
        </Section>
      ) : (
        <Error>
          <h1>Não existem bicicletas disponíveis no momento.</h1>
        </Error>
      )}

      <Footer />
    </>
  );
};

export default BicicletaFiltro;
