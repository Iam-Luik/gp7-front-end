import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Api from "../../../services/api";
import { ButtonWrapper, InputContainer } from "./style";
import { useHistory } from "react-router";
import { mask, unMask } from "remask";
import Alert from "@mui/material/Alert";

/** Padrão de formulários a ser seguidos no projeto */
export default function FormSingUpLocador() {
  const history = useHistory();

  /** Define os get e set dos valores */
  const [values, setValues] = React.useState({
    email: "",
    senha: "",
    nome: "",
    sobrenome: "",
    cpf: "",
    telefone: "",
    cep: "",
    cepError: false,
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    tipoUsuario: "locador",
    loading: false,
  });

  const handleChange = (prop) => (event) => {
    /**
     * exemplo de máscara, como aplicar ->
     * [prop]: mask(event.target.value, ["(99) 9999-9999", "(99) 99999-9999"])
     * Switch lógica ->
     * Se o "prop" (valor do formulário) for = (determinado valor) aplico uma máscara de acordo com o valor,
     * se não, apenas chamo o valor para setar na variável seu valor real (default).
     */
    switch (prop) {
      case "telefone":
        setValues({
          ...values,
          [prop]: mask(unMask(event.target.value), [
            "(99) 9999-9999",
            "(99) 99999-9999",
          ]),
        });
        break;
      case "cpf":
        setValues({
          ...values,
          [prop]: mask(unMask(event.target.value), ["999.999.999-99"]),
        });
        break;
      case "cep":
        setValues({
          ...values,
          [prop]: mask(unMask(event.target.value), ["99999-999"]),
        });
        break;
      case "estado":
        setValues({
          ...values,
          [prop]: mask(unMask(event.target.value), ["AA"]),
        });
        break;
      default:
        setValues({ ...values, [prop]: event.target.value });
        break;
    }
  };

  const buscaCep = (e) => {
    const cep = unMask(e.target.value);
    console.log(cep);
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          setValues({
            ...values,
            estado: "",
            cidade: "",
            bairro: "",
            rua: "",
          });
          setValues({
            ...values,
            estado: data.uf,
            cidade: data.localidade,
            bairro: data.bairro,
            rua: data.logradouro,
          });
        })
        .catch((err) => {
          console.error("Ocorreu um erro ao localizar cep", err);
        });
    }
  };

  const handleSubmit = (event) => {
    setValues({ ...values, loading: true });
    event.preventDefault();

    Api.post("http://localhost:8080/endereco/cadastrar", {
      cep: unMask(values.cep),
      estado: values.estado,
      cidade: values.cidade,
      bairro: values.bairro,
      rua: values.rua,
      numero: values.numero,
    })
      .then((response) => {
        Api.post("http://localhost:8080/usuario/cadastrar", {
          email: values.email,
          senha: values.senha,
          nome: values.nome,
          sobrenome: values.sobrenome,
          cpf: unMask(values.cpf),
          telefone: unMask(values.telefone),
          tipoUsuario: values.tipoUsuario,
          endereco: { id: response.data },
        })
          .then((response) => {
            console.log("cadastrado com sucesso: ", response);
            sessionStorage.setItem("idLocador", response.data);
            history.push("/login");
            setValues({ ...values, loading: false });
          })
          .catch((err) => {
            console.log("Ocorreu um erro ao cadastrar o usuário", err);
            alert("Ocorreu um erro ao cadastrar o usuário", err);
            setValues({
              ...values,
              error: true,
              password: "",
              loading: false,
            });
          });
      })
      .catch((err) => {
        console.log("Ocorreu um erro ao cadastrar o usuário", err);
        alert("Ocorreu um erro ao cadastrar o usuário", err);
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
        <h1>Cadastro locador</h1>
        <p>Digite aqui seus dados cadastrais para entrar em nosso site</p>
        <InputContainer>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            placeholder="email@email.com.br"
            multiline
            type="text"
            value={values.email}
            error={values.email.length === 0 && values.rodou === true}
            color="success"
            onChange={handleChange("email")}
          />

          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            placeholder="digite sua senha aqui"
            multiline
            type="text"
            value={values.senha}
            color="success"
            onChange={handleChange("senha")}
          />

          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            placeholder="José"
            multiline
            type="text"
            value={values.nome}
            color="success"
            onChange={handleChange("nome")}
          />

          <TextField
            id="outlined-basic"
            label="Sobrenome"
            variant="outlined"
            placeholder="Alves Santos"
            multiline
            type="text"
            value={values.sobrenome}
            color="success"
            onChange={handleChange("sobrenome")}
          />

          <TextField
            id="outlined-basic"
            label="Cpf"
            variant="outlined"
            placeholder="000.000.000-00"
            multiline
            type="text"
            value={values.cpf}
            color="success"
            onChange={handleChange("cpf")}
          />

          <TextField
            id="outlined-basic"
            label="Telefone"
            variant="outlined"
            placeholder="(00) 00000-0000"
            multiline
            type="text"
            value={values.telefone}
            color="success"
            onChange={handleChange("telefone")}
          />

          <TextField
            id="outlined-basic"
            label="Cep"
            variant="outlined"
            placeholder="00000-000"
            onBlur={buscaCep}
            multiline
            type="text"
            value={values.cep}
            error={values.cepError}
            color="success"
            onChange={handleChange("cep")}
          />

          <TextField
            id="outlined-basic"
            label="Estado"
            variant="outlined"
            placeholder="SP"
            multiline
            type="text"
            value={values.estado}
            color="success"
            onChange={handleChange("estado")}
          />

          <TextField
            id="outlined-basic"
            label="Cidade"
            variant="outlined"
            placeholder="São Paulo"
            multiline
            type="text"
            value={values.cidade}
            color="success"
            onChange={handleChange("cidade")}
          />

          <TextField
            id="outlined-basic"
            label="Bairro"
            variant="outlined"
            placeholder="Consolação"
            multiline
            type="text"
            value={values.bairro}
            color="success"
            onChange={handleChange("bairro")}
          />

          <TextField
            id="outlined-basic"
            label="Rua"
            variant="outlined"
            placeholder="Haddock Lobo"
            multiline
            type="text"
            value={values.rua}
            color="success"
            onChange={handleChange("rua")}
          />

          <TextField
            id="outlined-basic"
            label="Número"
            variant="outlined"
            placeholder="4001"
            multiline
            type="text"
            value={values.numero}
            color="success"
            onChange={handleChange("numero")}
          />
        </InputContainer>

        {values.email.length === 0 ||
        values.senha.length === 0 ||
        values.nome.length === 0 ||
        values.sobrenome.length === 0 ||
        values.cpf.length === 0 ||
        values.telefone.length === 0 ||
        values.cep.length === 0 ||
        values.estado.length === 0 ||
        values.cidade.length === 0 ||
        values.bairro.length === 0 ||
        values.rua.length === 0 ||
        values.numero.length === 0 ? (
          <Alert severity="warning">
            Preencha todos os campos para efetuar o cadastro!
          </Alert>
        ) : (
          <Alert severity="success">Todos os campos foram preenchidos!</Alert>
        )}
        <ButtonWrapper>
          {values.loading === true ? (
            <LoadingButton loading variant="contained">
              Submit
            </LoadingButton>
          ) : (
            <Button
              disabled={
                values.email.length === 0 ||
                values.senha.length === 0 ||
                values.nome.length === 0 ||
                values.sobrenome.length === 0 ||
                values.cpf.length === 0 ||
                values.telefone.length === 0 ||
                values.cep.length === 0 ||
                values.estado.length === 0 ||
                values.cidade.length === 0 ||
                values.bairro.length === 0 ||
                values.rua.length === 0 ||
                values.numero.length === 0
              }
              variant="contained"
              type="submit"
            >
              Cadastrar
            </Button>
          )}
        </ButtonWrapper>
      </div>
    </Box>
  );
}
