import DownloadIcon from "@mui/icons-material/Download";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useHistory } from "react-router";
import Select from "../../../components/Select";
import Api from "../../../services/api";
import {
  ButtonWrapper,
  InputContainer,
  RowBlocks,
  TxtContainer,
} from "./style";

/** Padrão de formulários a ser seguidos no projeto */
export default function FormSingUpBike() {
  const Input = styled("input")({
    display: "none",
  });
  const [picture, setPicture] = React.useState(null);

  const onChangePicture = (e) => {
    setPicture(e.target.files[0]);
  };
  var passou = false;

  const baixarArquivo = () => {
    Api.get("http://localhost:8080/bicicleta/obter-arquivo/10")
      .then((response) => {
        let data = response.data;
        let blob = new Blob([data], { type: "text/plain;charset=utf-8;" });
        const link = window.document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "arquivo-bike.txt";
        link.click();
        window.URL.revokeObjectURL(link.href);
        passou = true;
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  const history = useHistory();
  /** Define os get e set dos valores */
  const [values, setValues] = React.useState({
    marca: "",
    modelo: "",
    categoria: "",
    tamanhoAro: "",
    cor: "",
    velocidade: "",
    valorHora: "",
  });

  const categorias = {
    titulo: "categoria",
    valores: [
      {
        value: "classicos",
        label: "Clássicos",
      },
      {
        value: "eletrica",
        label: "Elétrica",
      },
      {
        value: "estrada",
        label: "Estrada",
      },
      {
        value: "infantil",
        label: "Infantil",
      },
      {
        value: "lazer",
        label: "Lazer",
      },
      {
        value: "montain-bike",
        label: "Mountain Bike",
      },
      {
        value: "urbana",
        label: "Urbana",
      },
    ],
  };
  const aros = {
    titulo: "tamanho aro",
    valores: [
      {
        value: "aro-26",
        label: "Aro 26",
      },
      {
        value: "aro-29",
        label: "Aro 29",
      },
    ],
  };
  const cores = {
    titulo: "cor",
    valores: [
      {
        value: "preta",
        label: "Preta",
      },
      {
        value: "cinza",
        label: "Cinza",
      },
      {
        value: "vinho",
        label: "Vinho",
      },
      {
        value: "verde",
        label: "Verde",
      },
      {
        value: "azul",
        label: "Azul",
      },
      {
        value: "grafite",
        label: "Grafite",
      },
    ],
  };
  const velocidades = {
    titulo: "velocidade",
    valores: [
      {
        value: "7-velocidades",
        label: "7 velocidades",
      },
      {
        value: "9-velocidades",
        label: "9 velocidades",
      },
      {
        value: "21-velocidades",
        label: "21 velocidades",
      },
      {
        value: "24-velocidades",
        label: "24 velocidades",
      },
      {
        value: "18-velocidades",
        label: "18 velocidades",
      },
    ],
  };

  /** Se caso algum item do campo for alterado, os valores do input são setados */
  const [categoria, setCategoria] = React.useState("");

  const handleChangeCategoria = (event) => {
    setCategoria(event.target.value);
  };

  const [aro, setAro] = React.useState("");

  const handleChangeAro = (event) => {
    setAro(event.target.value);
  };

  const [cor, setCor] = React.useState("");

  const handleChangeCor = (event) => {
    setCor(event.target.value);
  };

  const [velocidade, setVelocidade] = React.useState("");

  const handleChangeVelocidade = (event) => {
    setVelocidade(event.target.value);
  };

  const [arquivo, setArquivo] = React.useState("");

  const handleChangeArquivo = (event) => {
    setArquivo(event.target.value);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  const handleSubmit = (event) => {
    setValues({ ...values, loading: true });
    event.preventDefault();

    if (document.getElementById("arquivo").files[0]) {
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
      Api.post(
        "http://localhost:8080/bicicleta/envio-arquivo/file/1",
        data,
        config
      )
        .then(function (res) {
          console.log(res.data); //Resposta HTTP
          history.push("/card");
        })
        .catch(function (err) {
          console.log(err.message); //Erro HTTP
          alert("Arquivo txt não preenchido corretamente ou inválido");
          window.location.href = "/bike";
        });
    } else {
      Api.post("http://localhost:8080/bicicleta/cadastrar", {
        marca: values.marca,
        modelo: values.modelo,
        categoria: categoria,
        tamanhoAro: aro,
        cor: cor,
        velocidade: velocidade,

        usuario: { id: 1 },
      })
        .then((response) => {
          console.log("cadastrado com sucesso: ", response);
          console.log(arquivo);
          history.push("/card");
        })
        .catch((err) => {
          console.log("Ocorreu um erro ao cadastrar o usuário", err);
          alert(
            "Verifique se os dados do cadastro estão preenchidos corretamente"
          );
          window.location.href = "/bike";
        });
    }
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
        <h1>Cadastro bicicleta</h1>
        <p>Digite os dados de sua bicicleta</p>
        <InputContainer>
          <TextField
            id="outlined-basic"
            label="Marca"
            variant="outlined"
            placeholder="Caloi"
            multiline
            type="text"
            value={values.marca}
            color="success"
            onChange={handleChange("marca")}
          />

          <TextField
            id="outlined-basic"
            label="Modelo"
            variant="outlined"
            placeholder="Mountain"
            multiline
            type="text"
            value={values.modelo}
            color="success"
            onChange={handleChange("modelo")}
          />

          <Select
            props={categorias}
            handleChange={handleChangeCategoria}
            value={categoria}
          ></Select>

          <Select
            props={aros}
            handleChange={handleChangeAro}
            value={aro}
          ></Select>

          <Select
            props={cores}
            handleChange={handleChangeCor}
            value={cor}
          ></Select>

          <Select
            props={velocidades}
            handleChange={handleChangeVelocidade}
            value={velocidade}
          ></Select>
        </InputContainer>

        <RowBlocks>
          <TxtContainer>
            <div>
              <Button
                variant="contained"
                onClick={baixarArquivo}
                endIcon={<DownloadIcon />}
              >
                download
              </Button>
            </div>
            <h3>
              Envie todas suas bicicletas de uma só vez, <br />
              clique no botão para fazer download do arquivo.
            </h3>

            {/* <ButtonFile source={txtIcone} click={baixarArquivo} /> */}
          </TxtContainer>
        </RowBlocks>

        <RowBlocks>
          <TxtContainer>
            <div class="upload" id="myForm" name="myForm">
              <label htmlFor="arquivo">
                <Input multiple type="file" name="arquivo" id="arquivo" />
                <Button variant="contained" component="span" color="success">
                  Upload
                </Button>
              </label>
            </div>

            <h3>
              Agora envie o arquivo preenchido, <br />
              clique no botão para fazer upload do arquivo.
            </h3>

            {/* <ButtonFile source={txtIcone} click={baixarArquivo} /> */}
          </TxtContainer>
        </RowBlocks>
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
