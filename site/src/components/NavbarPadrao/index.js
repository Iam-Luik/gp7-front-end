import { Link } from "react-router-dom";
import { Header } from "./style";

function NavbarPadrao() {
  return (
    <div>
      <nav>
        <Header>
          <div class="logo">
            <Link to="/">
              <span>IMOVE</span>
            </Link>
          </div>
          <ul>
            <Link to="/">Home</Link>
            <span>|</span>
            <Link to="/direcionamento">Cadastre-se</Link>
            <Link to="/login">Entrar</Link>
          </ul>
        </Header>
      </nav>
    </div>
  );
}

export default NavbarPadrao;
