import { Link } from "react-router-dom";
import { CardStyle } from "./style";
import GeneralButton from "../GeneralButton/index";

import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

{
  /* <div>
<div class="divisor-error"></div>
<div class="botoes">
  <Button
    color="error"
    variant="outlined"
    startIcon={<DeleteIcon />}
  >
    remover
  </Button>
</div>
</div> */
}

{
  /* <div>
<div class="divisor-sucess"></div>
<div class="botoes">
  <Button variant="contained" color="success">
    comprovante
  </Button>
</div>
</div> */
}

function BicicletaCardStatus({ props }) {
  return (
    <>
      <CardStyle>
        <div class="imagem">
          <img src="https://caloi.com/wp-content/uploads/2020/08/evibe-tour-1500x900.jpg"></img>
        </div>
        <h1>
          {"E-VIBE ELITE FS PRO"} {" - "} {"CALOI"}
        </h1>
        <p>Status: {"em uso"}</p>
        <div>
          <div class="divisor-sucess"></div>
          <div class="botoes">
            <Button variant="contained" color="success">
              comprovante
            </Button>
          </div>
        </div>
      </CardStyle>

      <CardStyle>
        <div class="imagem">
          <img src="https://caloi.com/wp-content/uploads/2020/08/evibe-tour-1500x900.jpg"></img>
        </div>
        <h1>
          {"E-VIBE ELITE FS PRO"} {" - "} {"CALOI"}
        </h1>
        <p>Status: {"em uso"}</p>
        <div>
          <div class="divisor-error"></div>
          <div class="botoes">
            <Button color="error" variant="outlined" startIcon={<DeleteIcon />}>
              remover
            </Button>
          </div>
        </div>
      </CardStyle>
    </>
  );
}

export default BicicletaCardStatus;
