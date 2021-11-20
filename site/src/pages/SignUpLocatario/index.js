import Footer from "../../components/Footer";
import FormSingUpLocatario from "../../components/Forms/FormSingUpLocatario/index";
import NavbarPadrao from "../../components/NavbarPadrao";
import { Container, RowBlock } from "./style";

const SignUpLocatario = () => {
  return (
    <>
      <NavbarPadrao />
      <Container>
        <RowBlock>
          <FormSingUpLocatario />
        </RowBlock>
      </Container>

      <Footer />
    </>
  );
};

export default SignUpLocatario;
