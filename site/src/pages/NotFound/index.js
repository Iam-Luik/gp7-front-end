import NaoEncontrado from "../../assets/4041.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Container } from "./style";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div>
          <h2>
            Error 404
            <br />
            Página não encontrada
          </h2>
        </div>

        <img src={NaoEncontrado} alt="" />
      </Container>

      <Footer />
    </>
  );
};

export default NotFound;
