import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useHistory } from "react-router";
import { mask, unMask } from "remask";
import Api from "../../../services/api";
import { ButtonWrapper, InputContainer } from "./style";

/** Padrão de formulários a ser seguidos no projeto */
export default function FormSingUpLocatario() {
  const history = useHistory();

  //console.log(mask("00000000000", ["999.999.999-99"]));

  /** Define os get e set dos valores */
  const [values, setValues] = React.useState({
    email: "",
    senha: "",
    nome: "",
    sobrenome: "",
    cpf: "",
    telefone: "",
    cep: "",
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    tipoUsuario: "locatario",
  });

  /** Se caso algum item do campo for alterado, os valores do input são setados */
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
            history.push("/login");
            setValues({ ...values, loading: false });
            sessionStorage.setItem("idLocatario", response.data.id);
          })
          .catch((err) => {
            console.log("Ocorreu um erro ao cadastrar o usuário", err);
            setValues({ ...values, error: true, password: "", loading: false });
          });
      })
      .catch((err) => {
        console.log("Ocorreu um erro ao cadastrar o usuário", err);
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
        <h1>Cadastro locatario</h1>
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
            name="numero"
            onChange={handleChange("numero")}

          />

        </InputContainer>

        <ButtonWrapper>
          {values.loading === true ? (
            <LoadingButton loading variant="contained">
              Submit
            </LoadingButton>
          ) : (
            <Button variant="contained" type="submit">
              Cadastrar
            </Button>
          )}
        </ButtonWrapper>
      </div>
    </Box>
  );
}
