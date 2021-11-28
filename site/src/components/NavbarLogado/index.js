import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Api from "../../services/api";
import { Header } from "./style";

function NavbarLogado() {
  const history = useHistory();

  const [values, setValues] = React.useState({
    nome: "",
    img: "",
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // useEffect(() => {
  //   // Atualiza o titulo do documento usando a API do browser
  //   const nome = sessionStorage.getItem("nome");
  //   const img = sessionStorage.getItem("img");
  //   setValues({ ...values, nome: nome, img: img });
  //   console.log(values);
  // });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePerfil = () => {
    history.push("/alterar-usuario");
  };

  const handleLogoff = () => {
    Api.post("http://localhost:8080/usuario/sair", {
      email: sessionStorage.getItem("email"),
    })
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("email", "");
        sessionStorage.setItem("id", "");
        sessionStorage.setItem("nome", "");
        sessionStorage.setItem("imagemPerfil", "");
        history.push("/");
      })
      .catch((err) => {
        console.error("Ocorreu um erro ao fazer o logoff: ", err);
      });
  };

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
            <div>
              <Avatar
                alt={values.nome}
                src={
                  "http://localhost:8080/usuario/imagem/" +
                  sessionStorage.getItem("idUsuario")
                }
                sx={{ width: 45, height: 45 }}
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handlePerfil}>Meu perfil</MenuItem>
                <MenuItem onClick={handleLogoff}>Sair</MenuItem>
              </Menu>
            </div>
          </ul>
        </Header>
      </nav>
    </div>
  );
}

export default NavbarLogado;
