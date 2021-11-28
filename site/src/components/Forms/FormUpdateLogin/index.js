import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Api from "../../../services/api";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ButtonWrapper, InputContainer, Error } from "./style";

export default function FormUpdateLogin() {
  const history = useHistory();

  const [values, setValues] = React.useState({
    email: "",
    senha: "",
    showSenha: false,
    novaSenha: "",
    showNovaSenha: false,
    novaSenhaConfirmacao: "",
    showNovaSenhaConfirmacao: false,
    equals: true,
  });

  /** Se caso algum item do campo for alterado, os valores do input são setados */
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.novaSenha === values.novaSenhaConfirmacao &&
      values.novaSenha !== "" &&
      values.novaSenhaConfirmacao !== ""
    ) {
      Api.put(
        `usuario/alterar-senha/${sessionStorage.getItem("email")}/${
          values.senha
        }/${values.novaSenhaConfirmacao}`
      )
        .then((result) => {
          console.log("deu certo: ", result);
          history.push("/login");
        })
        .catch((err) => {
          console.log("deu erro", err);
        });
    } else {
      setValues({ ...values, equals: false });
    }
  };

  const handleClickShowSenha = () => {
    setValues({
      ...values,
      showSenha: !values.showSenha,
    });
  };

  const handleClickShowNovaSenha = () => {
    setValues({
      ...values,
      showNovaSenha: !values.showNovaSenha,
    });
  };

  const handleClickShowNovaSenhaConfirmacao = () => {
    setValues({
      ...values,
      showNovaSenhaConfirmacao: !values.showNovaSenhaConfirmacao,
    });
  };

  const handleMouseDownSenha = (event) => {
    event.preventDefault();
  };

  const handleMouseDownNovaSenha = (event) => {
    event.preventDefault();
  };

  const handleMouseDownNovaSenhaConfirmacao = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": {},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h1>Alterar senha</h1>
        <p>Digite sua atual senha e sua nova senha para alterar senha</p>

        <InputContainer>
          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            color="success"
          >
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showSenha ? "text" : "password"}
              value={values.senha}
              onChange={handleChange("senha")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowSenha}
                    onMouseDown={handleMouseDownSenha}
                    edge="end"
                  >
                    {values.showSenha ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Senha"
            />
          </FormControl>

          {/* <TextField
            fullWidth
            id="outlined-password-input"
            label="Senha atual"
            type="text"
            value={values.senha}
            color="success"
            onChange={handleChange("senha")}
          /> */}

          <div class="line">
            <div></div>
          </div>

          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            color="success"
            error={!values.equals}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Nova senha
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showNovaSenha ? "text" : "password"}
              value={values.novaSenha}
              onChange={handleChange("novaSenha")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNovaSenha}
                    onMouseDown={handleMouseDownNovaSenha}
                    edge="end"
                  >
                    {values.showNovaSenha ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Nova senha"
            />
          </FormControl>

          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            color="success"
            error={!values.equals}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Confirmação nova senha
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showNovaSenhaConfirmacao ? "text" : "password"}
              value={values.novaSenhaConfirmacao}
              onChange={handleChange("novaSenhaConfirmacao")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNovaSenhaConfirmacao}
                    onMouseDown={handleMouseDownNovaSenhaConfirmacao}
                    edge="end"
                  >
                    {values.showNovaSenhaConfirmacao ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirmação nova senha"
            />
          </FormControl>
        </InputContainer>
        <Error>
          {!values.equals ? <p>senhas não estão iguais</p> : <span></span>}
        </Error>

        <ButtonWrapper>
          {values.loading === true ? (
            <LoadingButton loading variant="contained">
              Submit
            </LoadingButton>
          ) : (
            <Button variant="contained" type="submit">
              Atualizar
            </Button>
          )}
        </ButtonWrapper>
      </div>
    </Box>
  );
}
