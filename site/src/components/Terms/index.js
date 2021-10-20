import "./style.js";
import { TermsStyle, TermsItens } from "./style";

function Terms() {
  return (
    <>
      <TermsStyle>
        <input type="checkbox" />
        <p>Aceito com os Termos de Privacidade</p>
      </TermsStyle>
      <TermsStyle>
        <input type="checkbox" />
        <p>Aceito com os Termos de Sergurança do Locador</p>
      </TermsStyle>
    </>
  );
}

export default Terms;
