import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GeneralButton from "../../GeneralButton/index";

import { InputContainer } from "./style";

/** Padrão de formulários a ser seguidos no projeto */
export default function FormSingUpLocatario() {
  /** Define os get e set dos valores */
  const [values, setValues] = React.useState({
    email: "",
    password: "",
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
  });

  /** Se caso algum item do campo for alterado, os valores do input são setados */
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  /** Chama o endpoint do backend de cadastro*/
  const handleSubmit = (event) => {
    // o event.preventDefault() serve para prevenir o comportamento padrão de um evento. -> exemplo re-load dá página
    event.preventDefault();
    console.log("entrou: ", values);
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
            fullWidth
            id="filled-textarea"
            label="Email"
            placeholder="email@email.com.br"
            multiline
            variant="filled"
            type="text"
            value={values.email}
            onChange={handleChange("email")}
          />
          <TextField
            fullWidth
            id="filled-textarea"
            label="Senha"
            placeholder="digite sua senha aqui"
            multiline
            variant="filled"
            type="text"
            value={values.senha}
            onChange={handleChange("senha")}
          />
          <TextField
            fullWidth
            id="filled-textarea"
            label="Nome"
            placeholder="José"
            multiline
            variant="filled"
            type="text"
            value={values.nome}
            onChange={handleChange("nome")}
          />

          <TextField
            fullWidth
            id="filled-textarea"
            label="Sobrenome"
            placeholder="Alves Santos"
            multiline
            variant="filled"
            type="text"
            value={values.sobrenome}
            onChange={handleChange("sobrenome")}
          />

          <TextField
            fullWidth
            id="filled-textarea"
            label="Cpf"
            placeholder="000.000.000-00"
            multiline
            variant="filled"
            type="text"
            value={values.cpf}
            onChange={handleChange("cpf")}
          />

          <TextField
            fullWidth
            id="filled-textarea"
            label="Telefone"
            placeholder="(00)0000-0000"
            multiline
            variant="filled"
            type="text"
            value={values.telefone}
            onChange={handleChange("telefone")}
          />

          <TextField
            fullWidth
            id="filled-textarea"
            label="Cep"
            placeholder="00000-000"
            multiline
            variant="filled"
            type="text"
            value={values.cep}
            onChange={handleChange("cep")}
          />

          <TextField
            fullWidth
            id="filled-textarea"
            label="Estado"
            placeholder="São Paulo"
            multiline
            variant="filled"
            type="text"
            value={values.estado}
            onChange={handleChange("estado")}
          />

          <TextField
            fullWidth
            id="filled-textarea"
            label="Cidade"
            placeholder="São Paulo"
            multiline
            variant="filled"
            type="text"
            value={values.cidade}
            onChange={handleChange("cidade")}
          />

          <TextField
            fullWidth
            id="filled-textarea"
            label="Bairro"
            placeholder="Consolação"
            multiline
            variant="filled"
            type="text"
            value={values.bairro}
            onChange={handleChange("bairro")}
          />

          <TextField
            fullWidth
            id="filled-textarea"
            label="Rua"
            placeholder="Haddock Lobo"
            multiline
            variant="filled"
            type="text"
            value={values.rua}
            onChange={handleChange("rua")}
          />

          <TextField
            fullWidth
            id="filled-textarea"
            label="Número"
            placeholder="4001"
            multiline
            variant="filled"
            type="text"
            value={values.numero}
            onChange={handleChange("numero")}
          />
        </InputContainer>

        <GeneralButton type="submit" button="Cadastrar" />
      </div>
    </Box>
  );
}
