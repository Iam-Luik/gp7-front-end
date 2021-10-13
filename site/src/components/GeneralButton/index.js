import "./style.js";
import { ButtonStyle } from "./style";

function GeneralButton({ button }) {
  return (
    <>
      <ButtonStyle>
        <button>{button}</button>
      </ButtonStyle>
    </>
  );
}

export default GeneralButton;
