import NavbarLogado from "../../components/NavbarLogado";
import Footer from "../../components/Footer";

import { RowBlock, Container } from "./style";
import FormUpdateUser from "../../components/Forms/FormUpdateUser";

const UpdateUser = () => {
  return (
    <>
      <NavbarLogado />
      <Container>
        <RowBlock>
          <div>
            <FormUpdateUser />
          </div>
        </RowBlock>
      </Container>
      <Footer />
    </>
  );
};

export default UpdateUser;
