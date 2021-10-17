import { Header } from "./style";
import imoveLogo from "../../assets/imove-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <Header>
          <div>
            <Link to="/">
              <img src={imoveLogo} alt="BigCo Inc. logo" />
            </Link>
          </div>
          <ul>
            <Link to="/">
            Home
            </Link>
            <Link to="/ajuda">
            Ajuda
            </Link>
            <Link to="/login">
            Login
            </Link>
            <Link to="/direcionamento">
            <button>Cadastre-se</button>
            </Link>
          </ul>
        </Header>
      </nav>
    </div>
  );
}

export default Navbar;
