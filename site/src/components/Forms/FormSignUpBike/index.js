import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Api from "../../../services/api";
import { ButtonWrapper, InputContainer, RowBlocks, TxtContainer } from "./style";
import { useHistory } from "react-router";
import txtIcone from "../../../assets/txtIcone.png";
import ButtonFile from "../../../components/ButtonFile";



/** Padrão de formulários a ser seguidos no projeto */
export default function FormSingUpBike() {

    const baixarArquivo = () => {
        Api.get("http://localhost:8080/bicicleta/obter-arquivo/10")
            .then((response) => {
                let data = response.data;
                let blob = new Blob([data], { type: 'text/plain;charset=utf-8;' });
                const link = window.document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'arquivo-bike.txt';
                link.click();
                window.URL.revokeObjectURL(link.href);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

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

    /** Se caso algum item do campo for alterado, os valores do input são setados */
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(values);
    };

    const handleSubmit = (event) => {
        setValues({ ...values, loading: true });
        event.preventDefault();

        Api.post("http://localhost:8080/bicicleta/cadastrar", {
            marca: values.marca,
            modelo: values.modelo,
            categoria: values.categoria,
            tamanhoAro: values.tamanhoAro,
            cor: values.cor,
            velocidade: values.velocidade,
            valorHora: values.valorHora,
        }).then((response) => {
            console.log("cadastrado com sucesso: ", response);
            history.push("/card");
            setValues({ ...values, loading: false });
        }).catch((err) => {
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
                <h1>CADASTRO BICICLETA</h1>
                <p>Digite os dados de sua bicicleta</p>
                <InputContainer>
                    <TextField id="outlined-basic"
                        label="Categoria"
                        variant="outlined"
                        placeholder="Répida"
                        multiline
                        type="text"
                        value={values.categoria}
                        color="success"
                        onChange={handleChange("categoria")} />

                    <TextField id="outlined-basic"
                        label="Marca"
                        variant="outlined"
                        placeholder="binbin"
                        multiline
                        type="text"
                        value={values.marca}
                        color="success"
                        onChange={handleChange("marca")} />

                    <TextField id="outlined-basic"
                        label="Modelo"
                        variant="outlined"
                        placeholder="VRUUUUM"
                        multiline
                        type="text"
                        value={values.modelo}
                        color="success"
                        onChange={handleChange("modelo")} />

                    <TextField id="outlined-basic"
                        label="TamanhoAro"
                        variant="outlined"
                        placeholder="12 quilates"
                        multiline
                        type="text"
                        value={values.tamanhoAro}
                        color="success"
                        onChange={handleChange("tamanhoAro")} />

                    <TextField id="outlined-basic"
                        label="Cor"
                        variant="outlined"
                        placeholder="Vermelha"
                        multiline
                        type="text"
                        value={values.cor}
                        color="success"
                        onChange={handleChange("cor")} />

                    <TextField id="outlined-basic"
                        label="Velocidade"
                        variant="outlined"
                        placeholder="12 km/h"
                        multiline
                        type="text"
                        value={values.velocidade}
                        color="success"
                        onChange={handleChange("velocidade")} />
                </InputContainer>

                <RowBlocks>
                    <TxtContainer>
                        <h3>Envie todas suas bicicletas de uma só vez, clique na imagem.</h3>
                        <ButtonFile source={txtIcone} click={baixarArquivo} />
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
