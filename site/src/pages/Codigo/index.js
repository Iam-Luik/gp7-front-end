import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";
import NavbarPadrao from "../../components/NavbarPadrao";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Api from "../../services/api";
import { ButtonWrapper, Container, Error, RowBlock } from "./style";
import Box from "@mui/material/Box";

/** Padrão de formulários a ser seguidos no projeto */
const Codigo = () => {
  /** Define os get e set dos valores */
  const history = useHistory();
  const [values, setValues] = React.useState({
    codigo: "",
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
    Api.post("http://localhost:8080/usuario/verificar-codigo/" + values.codigo)
      .then((response) => {
        console.log("Código validado com sucesso: ", response);
        setValues({ ...values, loading: false });
        history.push("/senha");
      })
      .catch((err) => {
        console.log("Ocorreu um erro ao validar o código", err);
        setValues({ ...values, error: true, codigo: "", loading: false });
      });
  };

  return (
    <>
      <NavbarPadrao />
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

            <p>
              Digite o código enviado para seu email para validarmos sua nova
              senha
            </p>

            <TextField
              fullWidth
              id="outlined-password-input"
              label="Código"
              type="text"
              value={values.codigo}
              color="success"
              error={values.error}
              onChange={handleChange("codigo")}
            />
            <Error>
              {values.error === true ? <p>Código inválido.</p> : <span></span>}
            </Error>

            <ButtonWrapper>
              {values.loading === true ? (
                <LoadingButton loading variant="contained">
                  Submit
                </LoadingButton>
              ) : (
                <Button variant="contained" type="submit">
                  Enviar código
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

export default Codigo;
