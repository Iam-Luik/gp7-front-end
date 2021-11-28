import NavbarLogado from "../../components/NavbarLogado";
import Footer from "../../components/Footer";

import { RowBlock, Container } from "./style";
import FormUpdateLogin from "../../components/Forms/FormUpdateLogin";

const UpdateLogin = () => {
  return (
    <>
      <NavbarLogado />
      <Container>
        <RowBlock>
          <div>
            <FormUpdateLogin />
          </div>
        </RowBlock>
      </Container>
      <Footer />
    </>
  );
};

export default UpdateLogin;
