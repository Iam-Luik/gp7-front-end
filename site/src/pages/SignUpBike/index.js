import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { RowBlock, Container } from "./style";
import FormSingUpBike from "../../components/Forms/FormSignUpBike/index";

const SignUpBike = () => {

  const baixarArquivo = () => {

    Api.get("http://localhost:8080/bicicleta/obter-arquivo/10")
      .then((response) => {
        let data = response.data;
        let blob = new Blob([data], { type: 'text/plain;charset=utf-8;' });
        const link = window.document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'arquivo-bike.txt';
        link.click();
        window.URL.revokeObjectURL(link.href);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  // const Arquivo = () => {
  //   if(input){
  //     console.log("entrou")
  //   }
  // }
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
