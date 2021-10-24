import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { RowBlock } from "./style";
import FormSingUpLocador from "../../components/Forms/FormSingUpLocador/index";

const SignUpLocador = () => {
  return (
    <>
      <Navbar />
      <RowBlock>
        <FormSingUpLocador />
      </RowBlock>
      <Footer />
    </>
  );
};

export default SignUpLocador;
