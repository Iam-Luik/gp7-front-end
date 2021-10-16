import { Header } from "./style";


import imoveLogo from "../../assets/imove-logo.png";

function Navbar() {
  return (
    <div>
      <nav>
        <Header>
          <div>
            {/* <Link to="/"> */}
              <img src={imoveLogo} alt="BigCo Inc. logo" />
            {/* </Link> */}
          </div>
          <ul>
            {/* <Link to="/"> */}
            <a href="home">Home</a>
            {/* </Link> */}
            <a href="ajuda">Ajuda</a>
            {/* <Link to="/login"> */}
            <a href="Login">Login</a>
            {/* </Link> */}
            {/* <Link to="/locatario"> */}
            <a href="SignUpLocador"><button>Cadastre-se</button></a>
            {/* </Link> */}
          </ul>
        </Header>
      </nav>
    </div>
  );
}

export default Navbar;
