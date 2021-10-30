import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.css";

export default function SelectAutoWidth({ props }) {
  const [option, setOption] = React.useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200, maxWidth: 200 }}>
        <Select value={option} onChange={handleChange} displayEmpty>
          <MenuItem value="">
            <em>{props.titulo}</em>
          </MenuItem>
          {props.valores.map((item) => (
            <MenuItem value={item.value}> {item.label} </MenuItem>
          ))}
        </Select>
      </FormControl>
      <p>selected value: {option}</p>
    </div>
  );
}
