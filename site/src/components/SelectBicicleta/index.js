import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

const categoria = 
  {
    titulo: "categoria",
    valores:  [
      {
        value: 1,
        label: "Clássicos"
      },
      {
        value: 2,
        label: "Elétrica"
      },
      {
        value: 3,
        label: "Estrada"
      },
      {
        value: 4,
        label: "Infantil"
      },
      {
        value: 5,
        label: "Lazer"
      },
      {
        value: 6,
        label: "Mountain Bike"
      }, 
      {
        value: 7,
        label: "Urbana"
      }
    ]
  }
;

const tamanhoAro = 
  {
    titulo: "tamanho aro",
    valores:  [
      {
        value: 1,
        label: "Aro 26"
      },
      {
        value: 2,
        label: "Aro 700"
      },
      {
        value: 3,
        label: "Aro 27.5"
      }
    ]
  }
;

const cor = 
  {
    titulo: "cor",
    valores:  [
      {
        value: 1,
        label: "Preta"
      },
      {
        value: 2,
        label: "Cinza"
      },
      {
        value: 3,
        label: "Vinho"
      },
      {
        value: 4,
        label: "Verde"
      },
      {
        value: 5,
        label: "Azul"
      },
      {
        value: 6,
        label: "Grafite"
      }
    ]
  }
;

const velocidade = 
  {
    titulo: "velocidade",
    valores:  [
      {
        value: 1,
        label: "7 velocidades"
      },
      {
        value: 2,
        label: "9 velocidades"
      },
      {
        value: 3,
        label: "21 velocidades"
      },
      {
        value: 4,
        label: "24 velocidades"
      },
      {
        value: 5,
        label: "18 velocidades"
      }
    ]
  }
;

const preco = 
  {
    titulo: "preço por hora",
    valores:  [
      {
        value: 1,
        label: "5,00R$"
      },
      {
        value: 2,
        label: "9,00R$"
      },
      {
        value: 3,
        label: "11,00R$"
      },
      {
        value: 4,
        label: "13,00R$"
      },
      {
        value: 5,
        label: "15,00R$"
      }
    ]
  } 
;

export default function SelectBicicleta() {
  const [values, setValues] = React.useState({
    categoria: ""
  });

  /** Se caso algum item do campo for alterado, os valores do input são setados */
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={values.categoria}
          onChange={handleChange()}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="0">
            <em>None</em>
          </MenuItem>
          {
            categoria.valores.map(item => <MenuItem value={item.value}> {item.label} </MenuItem>)
          } 
        </Select>
      </FormControl>
    </Box>
  );
}

