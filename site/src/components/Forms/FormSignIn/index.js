import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { Link, useParams } from "react-router-dom";
import Api from "../../../services/api";
import { ButtonWrapper, InputContainer } from "./style";
import { useHistory } from "react-router";

/** Padrão de formulários a ser seguidos no projeto */
export default function FormSingIn() {
  const history = useHistory();
  /** Define os get e set dos valores */
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
    error: false,
    loading: false,
  });

  /** Se caso algum item do campo for alterado, os valores do input são setados */
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  /** Serve para exibir ou não a senha */
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  /** Verifica o evento de quando o mouse sai de cima do input */
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  /** Chama o endpoint do backend de autenticação*/
  const handleSubmit = (event) => {
    setValues({ ...values, loading: true });
    event.preventDefault();
    Api.post("http://localhost:8080/usuario/autenticar", {
      email: values.email,
      senha: values.password,
    })
      .then((response) => {
        console.log("autenticado com sucesso: ", response);
        // sessionStorage.setItem("emai l", response.data.email);
        sessionStorage.setItem("idUsuario", response.data.id);
        // sessionStorage.setItem("nome", response.data.nome);
        // sessionStorage.setItem("imagemPerfil", response.data.imagemPerfil);
        setValues({ ...values, loading: false });
        if (response.data.tipoUsuario === "locador") {
          history.push("/cardLocador");
        } else if (response.data.tipoUsuario === "locatario") {
          history.push("/cardLocatario");
        }
      })
      .catch((err) => {
        console.log("Ocorreu um erro ao obter dados de usuário", err);
        setValues({ ...values, error: true, password: "", loading: false });
      });
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": { mt: 2, mb: 2 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h1>Entrar</h1>
        <p>Utilize seus dados cadastrais para entrar no aplicativo</p>
        <InputContainer>
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

          <FormControl sx={{ mt: 2, mb: 2 }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              color="success"
              error={values.error}
            >
              Senha
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    color={values.error ? "error" : "default"}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              error={values.error}
              label="Senha"
              color="success"
            />
          </FormControl>
          {values.error === true ? (
            <p>Login e/ou senha incorreto(s)</p>
          ) : (
            <p></p>
          )}
        </InputContainer>
        <Link to="/email">
          <h3>Esqueceu a senha?</h3>
        </Link>
        <ButtonWrapper>
          {values.loading === true ? (
            <LoadingButton loading variant="contained">
              Submit
            </LoadingButton>
          ) : (
            <Button variant="contained" type="submit">
              Entrar
            </Button>
          )}
        </ButtonWrapper>
      </div>
    </Box>
  );
}
