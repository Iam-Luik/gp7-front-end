import Api from "../services/api";

export const isAuthenticated = () =>
  Api.post("http://localhost:8080/usuario/autenticar", {
    email: sessionStorage.getItem("email"),
    senha: sessionStorage.getItem("senha"),
  })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
