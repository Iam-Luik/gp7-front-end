import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './style.css';

export default function Input({placeholder, label}) {
  

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
        <TextField
          fullWidth
          id="filled-textarea"
          label={label}
          placeholder={placeholder}
          multiline
          variant="filled"
        />
      </div>
    </Box>
  );
}