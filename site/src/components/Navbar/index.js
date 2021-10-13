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
            <a href="home">HOME</a>
            {/* </Link> */}
            <a href="ajuda">AJUDA</a>
            {/* <Link to="/login"> */}
            <a href="Login">LOGIN</a>
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
