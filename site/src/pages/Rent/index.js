import Navbar from "../../components/Navbar";

import { RowBlockLeft, RowBlockRight, ColBlocks } from "./style";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <h1>Contratação</h1>
      <ColBlocks>
        <RowBlockLeft>
          <h2>Bicicleta Caloi Two Niner</h2>
          <p>Aro 29</p>
          <h1>R$ 00,00</h1>
        </RowBlockLeft>
        <RowBlockRight>
          {/* <SimpleSlider /> */}
        </RowBlockRight>
      </ColBlocks>
      <ColBlocks>
        <RowBlockLeft>
          {/* <SimpleSlider /> */}
        </RowBlockLeft>
        <RowBlockRight>
          <h2>Vitória</h2>
          <p>Feminino</p>
          <h1>(51) 2824-2466</h1>
        </RowBlockRight>
      </ColBlocks>

      {/* <Footer /> */}
    </>
  );
};

export default SignIn;
