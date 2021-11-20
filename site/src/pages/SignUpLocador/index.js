import NavbarPadrao from "../../components/NavbarPadrao";
import Footer from "../../components/Footer";
import { RowBlock, Container } from "./style";
import FormSingUpLocador from "../../components/Forms/FormSingUpLocador/index";

const SignUpLocador = () => {
  return (
    <>
      <NavbarPadrao />
      <Container>
        <RowBlock>
          <FormSingUpLocador />
        </RowBlock>
      </Container>
      <Footer />
    </>
  );
};

export default SignUpLocador;
