import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NaoEncontrado from "../../assets/4041.png";

import {
    ColBlocks,
  RowBlockLeft,
  RowBlockRight,
} from "./style";

const NotFound = () => {
  return (
    <>
      <Navbar />
<ColBlocks>
        <RowBlockLeft>
        <span>
            <h1>404</h1>
            </span>
            <b>
            <h2>PÁGINA NÃO ENCONTRADA</h2>
            </b>
        </RowBlockLeft>
        <RowBlockRight>
        <img src={NaoEncontrado} alt="" />
        </RowBlockRight>
        </ColBlocks>
      <Footer />
    </>
  );
};

export default NotFound;
