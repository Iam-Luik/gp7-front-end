import "./style.js";
import { ButtonStyle } from "./style";

function GeneralButton({ button, click}) {
  return (
    <>
      <ButtonStyle>
        <button onClick={click}>{button}</button>
      </ButtonStyle>
    </>
  );
}

export default GeneralButton;