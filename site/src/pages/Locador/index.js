import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BicicletaControll from "../../components/BicicletaControll";
import { Container } from "./style";

const bicicletas = [
  {
    titulo: "E-VIBE ELITE FS PRO",
    preco: "R$ 5,00 por hora",
  },
  {
    imagem:
      "https://caloi.com/wp-content/uploads/2021/05/Caloi-City-Tour-Comp-lateral-1500x900.jpg",
    titulo: "E-VIBE ELITE FS PRO",
    preco: "R$ 5,00 por hora",
  },
  {
    imagem:
      "https://caloi.com/wp-content/uploads/2021/05/Caloi-City-Tour-Comp-lateral-1500x900.jpg",
    titulo: "E-VIBE ELITE FS PRO",
    preco: "R$ 5,00 por hora",
  },
  {
    imagem:
      "https://caloi.com/wp-content/uploads/2021/05/Caloi-City-Tour-Comp-lateral-1500x900.jpg",
    titulo: "E-VIBE ELITE FS PRO",
    preco: "R$ 5,00 por hora",
  },
];

const Locador = () => {
  return (
    <>
      <Navbar />

      <Container>
        <BicicletaControll props={bicicletas}></BicicletaControll>
      </Container>

      {/* <Link to="/bike">
        <GeneralButton button="ADICIONAR" />
        </Link> */}
      <Footer />
    </>
  );
};

export default Locador;
