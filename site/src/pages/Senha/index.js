import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";
import NavbarPadrao from "../../components/NavbarPadrao";
import Api from "../../services/api";
import { ButtonWrapper, Container, Error, RowBlock } from "./style";

/** Padrão de formulários a ser seguidos no projeto */
const Senha = () => {
  const history = useHistory();

  const [values, setValues] = React.useState({
    novaSenha: "",
    confirmarNovaSenha: "",
    error: false,
    loading: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.novaSenha === values.confirmarNovaSenha) {
      setValues({ ...values, loading: true });
      Api.put(
        "http://localhost:8080/usuario/alterar-senha/" +
          sessionStorage.getItem("email") +
          "/" +
          values.confirmarNovaSenha
      )
        .then((response) => {
          console.log("Senha alterada com sucesso: ", response);
          setValues({ ...values, loading: false });
          history.push("/login");
        })
        .catch((err) => {
          console.log("Ocorreu um erro ao trocar senha", err);
          setValues({
            ...values,
            novaSenha: "",
            confirmarNovaSenha: "",
            loading: false,
          });
        });
    } else {
      setValues({ ...values, error: true });
    }
  };

  /** Define os get e set dos valores */
  return (
    <>
      <NavbarPadrao />
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": { mt: 2 },
        }}
        noValidate
        autoComplete="off"
      >
        <Container>
          <RowBlock>
            <h1>Recuperação de senha</h1>
            <p>Digite sua nova senha para finalizar</p>

            <TextField
              fullWidth
              id="outlined-password-input"
              label="Nova senha"
              type="text"
              value={values.novaSenha}
              color="success"
              error={values.error}
              onChange={handleChange("novaSenha")}
            />
            <TextField
              fullWidth
              id="outlined-password-input"
              label="Confirmar nova senha"
              type="text"
              value={values.confirmarNovaSenha}
              color="success"
              error={values.error}
              onChange={handleChange("confirmarNovaSenha")}
            />

            <Error>
              {values.error === true ? (
                <p>Senhas não estão iguais.</p>
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
                  Criar nova senha
                </Button>
              )}
            </ButtonWrapper>
          </RowBlock>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Senha;
