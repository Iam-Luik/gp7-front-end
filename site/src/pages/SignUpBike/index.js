import Footer from "../../components/Footer";
import FormSingUpBike from "../../components/Forms/FormSignUpBike/index";
import NavbarPadrao from "../../components/NavbarPadrao";
import Api from "../../services/api";
import { Container, RowBlock } from "./style";

const SignUpBike = () => {
  // const Arquivo = () => {
  //   if(input){
  //     console.log("entrou")
  //   }
  // }
  return (
    <>
      <NavbarPadrao />
      <Container>
        <RowBlock>
          <FormSingUpBike />
        </RowBlock>
      </Container>

      <Footer />
    </>
  );
};

export default SignUpBike;
