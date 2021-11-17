import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { RowBlock, Container } from "./style";
import FormSingUpBike from "../../components/Forms/FormSignUpBike/index";

const SignUpBike = () => {
  return (
    <>
      <Navbar />
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
