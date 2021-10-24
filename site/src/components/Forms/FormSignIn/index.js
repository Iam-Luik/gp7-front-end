import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GeneralButton from '../../../components/GeneralButton/index';
import { Link } from "react-router-dom";

import './style.css';

/** Padrão de formulários a ser seguidos no projeto */
export default function FormSingIn() {
    /** Define os get e set dos valores */
    const [values, setValues] = React.useState({
      email: '',
      password: '',
      showPassword: false,
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

    /** Evita eventos não */
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    return (
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { mt: 2, mb: 2 },
        }}
        noValidate
        autoComplete="off"
        >
        
        <div>
        <h1>Entrar</h1>
        <p>Utilize seus dados cadastrais para entrar no aplicativo</p>
        {/* Input do email */}
        <TextField
                fullWidth
                id="filled-textarea"
                label="Email"
                placeholder="email@email.com.br"
                multiline
                variant="filled"
                type="text"
                value={values.email}
                onChange={handleChange('email')}
        />

        {/* Input da senha */}
        
        <FormControl sx={{ mt: 2, mb: 2 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Senha</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
          <h3>Esqueceu a senha?</h3>
          <Link to="/card">
            <GeneralButton button="Entrar" />
          </Link>
        </div>
        </Box>
  );
}