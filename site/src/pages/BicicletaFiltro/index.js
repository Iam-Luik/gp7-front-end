import BicicletaCard from "../../components/BicicletaCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Select from "../../components/Select";
import { Section, SelectFilter } from "./style";

const bicicleta = {
  imagem:
    "https://caloi.com/wp-content/uploads/2021/05/Caloi-City-Tour-Comp-lateral-1500x900.jpg",
  titulo: "E-VIBE ELITE FS PRO",
  preco: "R$ 5,00 por hora",
};

const categoria = {
  titulo: "categoria",
  valores: [
    {
      value: "Clássicos",
      label: "Clássicos",
    },
    {
      value: "Elétrica",
      label: "Elétrica",
    },
    {
      value: "Estrada",
      label: "Estrada",
    },
    {
      value: "Infantil",
      label: "Infantil",
    },
    {
      value: "Lazer",
      label: "Lazer",
    },
    {
      value: "Mountain Bike",
      label: "Mountain Bike",
    },
    {
      value: "Urbana",
      label: "Urbana",
    },
  ],
};
const aro = {
  titulo: "tamanho aro",
  valores: [
    {
      value: "Aro 26",
      label: "Aro 26",
    },
    {
      value: "Aro 700",
      label: "Aro 700",
    },
    {
      value: "Aro 27.5",
      label: "Aro 27.5",
    },
  ],
};
const cor = {
  titulo: "cor",
  valores: [
    {
      value: "Preta",
      label: "Preta",
    },
    {
      value: "Cinza",
      label: "Cinza",
    },
    {
      value: "Vinho",
      label: "Vinho",
    },
    {
      value: "Verde",
      label: "Verde",
    },
    {
      value: "Azul",
      label: "Azul",
    },
    {
      value: "Grafite",
      label: "Grafite",
    },
  ],
};
const velocidade = {
  titulo: "velocidade",
  valores: [
    {
      value: "7 velocidades",
      label: "7 velocidades",
    },
    {
      value: "9 velocidades",
      label: "9 velocidades",
    },
    {
      value: "21 velocidades",
      label: "21 velocidades",
    },
    {
      value: "24 velocidades",
      label: "24 velocidades",
    },
    {
      value: "18 velocidades",
      label: "18 velocidades",
    },
  ],
};
const preco = {
  titulo: "preço por hora",
  valores: [
    {
      value: "5,00R$",
      label: "5,00R$",
    },
    {
      value: "9,00R$",
      label: "9,00R$",
    },
    {
      value: "11,00R$",
      label: "11,00R$",
    },
    {
      value: "13,00R$",
      label: "13,00R$",
    },
    {
      value: "15,00R$",
      label: "15,00R$",
    },
  ],
};
const BicicletaFiltro = () => {
  return (
    <>
      <Navbar />
      <SelectFilter>
        <Select props={categoria}></Select>
        <Select props={aro}></Select>
        <Select props={cor}></Select>
        <Select props={velocidade}></Select>
        <Select props={preco}></Select>
      </SelectFilter>
      <Section>
        <BicicletaCard props={bicicleta}></BicicletaCard>
        <BicicletaCard props={bicicleta}></BicicletaCard>
        <BicicletaCard props={bicicleta}></BicicletaCard>
        <BicicletaCard props={bicicleta}></BicicletaCard>
        <BicicletaCard props={bicicleta}></BicicletaCard>
      </Section>
      <Footer />
    </>
  );
};

export default BicicletaFiltro;
