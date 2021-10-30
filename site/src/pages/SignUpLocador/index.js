import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { RowBlock, Container } from "./style";
import FormSingUpLocador from "../../components/Forms/FormSingUpLocador/index";

const SignUpLocador = () => {
  return (
    <>
      <Navbar />
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
