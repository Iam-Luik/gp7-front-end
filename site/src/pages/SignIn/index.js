import NavbarPadrao from "../../components/NavbarPadrao";
import Footer from "../../components/Footer";

import FormSingIn from "../../components/Forms/FormSignIn/index";

import { RowBlock, Container } from "./style";

const SignIn = () => {
  return (
    <>
      <NavbarPadrao />
      <Container>
        <RowBlock>
          <div>
            <FormSingIn />
          </div>
        </RowBlock>
      </Container>
      <Footer />
    </>
  );
};

export default SignIn;
