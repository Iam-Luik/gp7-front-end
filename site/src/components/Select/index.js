import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth({props}) {
  const [option, setOption] = React.useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
  };
  

  return ( 
    <div>
      <FormControl sx={{ m: 1, minWidth: 200, maxWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{props.titulo}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={option}
          onChange={handleChange}
          autoWidth
          label={props.titulo}
        >
          <MenuItem value="">
            <em>Nenhum</em>
          </MenuItem>
          {
            props.valores.map(item => <MenuItem value={item.value}> {item.label} </MenuItem>)
          } 
        </Select>
      </FormControl>
    </div>
  );
}