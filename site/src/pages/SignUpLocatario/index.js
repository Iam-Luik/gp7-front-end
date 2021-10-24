import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { RowBlock } from "./style";
import FormSingUpLocatario from "../../components/Forms/FormSingUpLocatario/index";

const SignUpLocatario = () => {
  return (
    <>
      <Navbar />
      <RowBlock>
        <FormSingUpLocatario />
      </RowBlock>

      <Footer />
    </>
  );
};

export default SignUpLocatario;
