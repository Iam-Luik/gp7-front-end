import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { RowBlock, Container } from "./style";
import FormSingUpLocatario from "../../components/Forms/FormSingUpLocatario/index";

const SignUpLocatario = () => {
  return (
    <>
      <Navbar />
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
