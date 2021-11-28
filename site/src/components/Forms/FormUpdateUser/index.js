import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import * as React from "react";
import { InputContainer, Avatar, ButtonWrapper } from "./style";
import Badge from "@mui/material/Badge";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { mask, unMask } from "remask";
import Api from "../../../services/api";

export default function FormUpdateUser() {
  const Input = styled("input")({
    display: "none",
  });

  const [values, setValues] = React.useState({
    nome: "",
    sobrenome: "",
    cpf: "",
    telefone: "",
    imagem: "",
  });

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: 15,
      top: 125,
      height: 40,
      width: 40,
      borderRadius: 50,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
      backgroundColor: "#054107",
    },
  }));

  useEffect(() => {
    Api.get(
      `http://localhost:8080/usuario/` + sessionStorage.getItem("idUsuario")
    )
      .then((result) => {
        setValues({
          ...values,
          nome: result.data.nome,
          sobrenome: result.data.sobrenome,
          cpf: mask(result.data.cpf, ["999.999.999-99"]),
          telefone: mask(result.data.telefone, [
            "(99) 9999-9999",
            "(99) 99999-9999",
          ]),
          imagem: result.data.imagem,
        });
        console.log(result);
      })
      .catch((err) => {
        console.log("Ocorreu um erro ao buscar informações do usuário: ", err);
      });
  }, []);

  /** Se caso algum item do campo for alterado, os valores do input são setados */
  const handleChange = (prop) => (event) => {
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
      default:
        setValues({ ...values, [prop]: event.target.value });
        break;
    }
    // setValues({ ...values, [prop]: event.target.value });
    // console.log(values);
  };

  const handleAvatar = () => {
    console.log("clicou");
  };

  function handleImagem(id) {
    var data = new FormData();
    data.append("file", document.getElementById("arquivo").files[0]);

    //Configura a barra de progresso
    var config = {
      onUploadProgress: function (progressEvent) {
        var percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(percentCompleted);
      },
    };

    Api.post("http://localhost:8080/usuario/imagem/" + id, data, config)
      .then(function (res) {
        console.log(res.data); //Resposta HTTP
        window.location.reload(true);
      })
      .catch(function (err) {
        console.log(err.message); //Erro HTTP
      });
  }

  const handleSubmit = (event) => {
    console.log(event);
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
        <h1>Meu perfil</h1>
        <p>Atualize seu dados e clique em salvar</p>

        <label htmlFor="arquivo">
          <Input
            accept="image/*"
            type="file"
            name="arquivo"
            id="arquivo"
            onChange={() => handleImagem(sessionStorage.getItem("idUsuario"))}
          />
          <Avatar>
            {values.imagem !== null && values.imagem !== "" ? (
              <img
                src={
                  "http://localhost:8080/usuario/imagem/" +
                  sessionStorage.getItem("idUsuario")
                }
                alt="foto perfil"
              ></img>
            ) : (
              <StyledBadge
                color="secondary"
                badgeContent={<EditIcon />}
                onClick={handleAvatar}
              >
                <img
                  src="https://s.gravatar.com/avatar/fda64b1c41543901974ffee2d065b1c2?d=mm&s=200"
                  alt="foto perfil  "
                ></img>
              </StyledBadge>
            )}
          </Avatar>
        </label>

        <InputContainer>
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Nome"
            type="text"
            value={values.nome}
            color="success"
            error={values.error}
            onChange={handleChange("nome")}
          />
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Sobrenome"
            type="text"
            value={values.sobrenome}
            color="success"
            onChange={handleChange("sobrenome")}
          />
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Cpf"
            type="text"
            value={values.cpf}
            color="success"
            onChange={handleChange("cpf")}
          />
          <TextField
            fullWidth
            id="outlined-password-input"
            label="Telefone"
            type="text"
            value={values.telefone}
            color="success"
            error={values.error}
            onChange={handleChange("telefone")}
          />
        </InputContainer>
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
