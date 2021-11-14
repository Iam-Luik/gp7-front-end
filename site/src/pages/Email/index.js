import TextField from "@mui/material/TextField";
import React from "react";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Api from "../../services/api";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import { Container, RowBlock, ButtonWrapper, Error } from "./style";
import Box from "@mui/material/Box";

/** Padrão de formulários a ser seguidos no projeto */
export default function Email() {
  const history = useHistory();

  const [values, setValues] = React.useState({
    email: "",
    error: false,
    loading: false,
  });

  /** Se caso algum item do campo for alterado, os valores do input são setados */
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  /** Chama o endpoint do backend de autenticação*/
  const handleSubmit = (event) => {
    setValues({ ...values, loading: true });
    event.preventDefault();
    Api.post("http://localhost:8080/usuario/enviar-email-senha/" + values.email)
      .then((response) => {
        console.log("código de recuperação enviado com sucesso: ", response);
        sessionStorage.setItem("email", values.email);
        setValues({ ...values, loading: false });
        history.push("/codigo");
      })
      .catch((err) => {
        console.log("Ocorreu um erro ao enviar código de recuperação", err);
        setValues({ ...values, error: true, email: "", loading: false });
      });
  };

  return (
    <>
      <Navbar />
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": { mt: 2, mb: 2 },
        }}
        noValidate
        autoComplete="off"
      >
        <Container>
          <RowBlock>
            <h1>Recuperação de senha</h1>
            <p>Digite seu email cadastrado para solicitar sua nova senha</p>

            <TextField
              fullWidth
              id="outlined-password-input"
              label="Email"
              type="text"
              value={values.email}
              color="success"
              error={values.error}
              onChange={handleChange("email")}
            />
            <Error>
              {values.error === true ? (
                <p>Email informado não foi encontrado.</p>
              ) : (
                <span></span>
              )}
            </Error>

            <ButtonWrapper>
              {values.loading === true ? (
                <LoadingButton loading variant="contained">
                  Submit
                </LoadingButton>
              ) : (
                <Button variant="contained" type="submit">
                  Solicitar nova senha
                </Button>
              )}
            </ButtonWrapper>
          </RowBlock>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
