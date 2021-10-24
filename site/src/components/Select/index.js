import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './style.css'

export default function SelectAutoWidth({props}) {
  const [option, setOption] = React.useState('');

  const handleChange = (event) => {
    setOption(event.target.value);
  };
  

  return ( 
    <div>
      <FormControl sx={{ m: 1, minWidth: 200, maxWidth: 200 }}>
        <Select
          
          value={option}
          onChange={handleChange}
          displayEmpty
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

{/* <FormControl sx={{ m: 1, minWidth: 120 }}>
<Select
  value={age}
  onChange={handleChange}
  displayEmpty
  inputProps={{ 'aria-label': 'Without label' }}
>
  <MenuItem value="">
    <em>None</em>
  </MenuItem>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Select>
<FormHelperText>Without label</FormHelperText>
</FormControl> */}