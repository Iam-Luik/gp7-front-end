import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.css";

export default function SelectAutoWidth({ props, value, handleChange }) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200, maxWidth: 200 }}>
        <Select value={value} onChange={handleChange} displayEmpty>
          <MenuItem value="">
            <em>{props.titulo}</em>
          </MenuItem>
          {props.valores.map((item) => (
            <MenuItem value={item.value}> {item.label} </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
