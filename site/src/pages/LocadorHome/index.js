import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Section } from "./style";
import BicicletaCardStatus from "../../components/BicicletaCardStatus";

const bicicleta = [
  {
    imagem:
      "https://caloi.com/wp-content/uploads/2020/08/evibe-tour-1500x900.jpg",
    marca: "CALOI",
    modelo: "E-VIBE ELITE FS PRO",
    status: "em uso",
  },
];

const LocadorHome = () => {
  return (
    <>
      <Navbar />
      <Section>
        <BicicletaCardStatus props={bicicleta}></BicicletaCardStatus>
      </Section>
      <Footer />
    </>
  );
};

export default LocadorHome;
