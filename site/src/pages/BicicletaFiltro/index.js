import Navbar from "../../components/Navbar";
import Select from "../../components/Select";
import {SelectFilter} from './style';
import BicicletaCard from "../../components/BicicletaCard";
import { Section } from './style';

const bicicleta = {
  imagem: "https://caloi.com/wp-content/uploads/2021/05/Caloi-City-Tour-Comp-lateral-1500x900.jpg",
  titulo: "E-VIBE ELITE FS PRO",
  preco: "R$ 5,00 por hora",
};

const categoria = 
  {
    titulo: "categoria",
    valores:  [
      {
        value: 1,
        label: "Clássicos"
      },
      {
        value: 2,
        label: "Elétrica"
      },
      {
        value: 3,
        label: "Estrada"
      },
      {
        value: 4,
        label: "Infantil"
      },
      {
        value: 5,
        label: "Lazer"
      },
      {
        value: 6,
        label: "Mountain Bike"
      }, 
      {
        value: 7,
        label: "Urbana"
      }
    ]
  }
;

const tamanhoAro = 
  {
    titulo: "tamanho aro",
    valores:  [
      {
        value: 1,
        label: "Aro 26"
      },
      {
        value: 2,
        label: "Aro 700"
      },
      {
        value: 3,
        label: "Aro 27.5"
      }
    ]
  }
;

const cor = 
  {
    titulo: "cor",
    valores:  [
      {
        value: 1,
        label: "Preta"
      },
      {
        value: 2,
        label: "Cinza"
      },
      {
        value: 3,
        label: "Vinho"
      },
      {
        value: 4,
        label: "Verde"
      },
      {
        value: 5,
        label: "Azul"
      },
      {
        value: 6,
        label: "Grafite"
      }
    ]
  }
;

const velocidade = 
  {
    titulo: "velocidade",
    valores:  [
      {
        value: 1,
        label: "7 velocidades"
      },
      {
        value: 2,
        label: "9 velocidades"
      },
      {
        value: 3,
        label: "21 velocidades"
      },
      {
        value: 4,
        label: "24 velocidades"
      },
      {
        value: 5,
        label: "18 velocidades"
      }
    ]
  }
;

const preco = 
  {
    titulo: "preço por hora",
    valores:  [
      {
        value: 1,
        label: "5,00R$"
      },
      {
        value: 2,
        label: "9,00R$"
      },
      {
        value: 3,
        label: "11,00R$"
      },
      {
        value: 4,
        label: "13,00R$"
      },
      {
        value: 5,
        label: "15,00R$"
      }
    ]
  } 
;

const BicicletaFiltro = () => {
  return (
    <>
      <Navbar />
        <SelectFilter>
          <Select props={categoria}/>
          <Select props={tamanhoAro}/>
          <Select props={cor}/>
          <Select props={velocidade}/>
          <Select props={preco}/>
        </SelectFilter>
        <Section>
          <BicicletaCard props={bicicleta}></BicicletaCard>
          <BicicletaCard props={bicicleta}></BicicletaCard>
          <BicicletaCard props={bicicleta}></BicicletaCard>
          <BicicletaCard props={bicicleta}></BicicletaCard>
          <BicicletaCard props={bicicleta}></BicicletaCard>
        </Section>
    </>
  );
};

export default BicicletaFiltro;