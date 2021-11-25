import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Api from "../../../services/api";
import InputMask from "react-input-mask";
import { ButtonWrapper, InputContainer } from "./style";
import { useHistory } from "react-router";
import { IMaskInput } from 'react-imask';

/** Padrão de formulários a ser seguidos no projeto */
export default function FormSingUpLocatario() {
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
    estado: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    tipoUsuario: "locatario",
  });

  /** Se caso algum item do campo for alterado, os valores do input são setados */
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  const handleSubmit = (event) => {
    setValues({ ...values, loading: true });
    event.preventDefault();

    Api.post("http://localhost:8080/endereco/cadastrar", {
      cep: values.cep,
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
          cpf: values.cpf,
          telefone: values.telefone,
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

  const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });

  TextMaskCustom.propTypes = {
    name: "numero",
    onChange: "numero"
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
            placeholder="(00)0000-0000"
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
            placeholder="00000-00"
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
            placeholder="São Paulo"
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
            inputComponent={TextMaskCustom}
          />

          <InputMask mask="99999-999" value={values.numero} onChange={handleChange("numero")} />
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
