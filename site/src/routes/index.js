import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import SignUpLocador from "../pages/SignUpLocador";
import SignUpLocatario from "../pages/SignUpLocatario";
import SignIn from "../pages/SignIn";
import Rent from "../pages/Rent";
import Localization from "../pages/Localization";
import Direcionamento from "../pages/direcionamento";
import SignUpBike from "../pages/SignUpBike";
import ComprovanteLocador from "../pages/ComprovanteLocador";
import ComprovanteLocatario from "../pages/ComprovanteLocatario";
import BicicletaFiltro from "../pages/BicicletaFiltro";
import Locador from "../pages/Locador";
import NotFound from "../pages/NotFound";
import Senha from "../pages/Senha";
import Email from "../pages/Email";
import Codigo from "../pages/Codigo";
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

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathName: "/*", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" exact component={Home} />
      <Route path="/senha" exact component={Senha} />
      <Route path="/email" exact component={Email} />
      <Route path="/codigo" exact component={Codigo} />
      <Route path="/login" exact component={SignIn} />

      <PrivateRoute path="/locador" exact component={SignUpLocador} />
      <PrivateRoute path="/locatario" exact component={SignUpLocatario} />
      <PrivateRoute path="/rent" exact component={Rent} />
      <PrivateRoute path="/localization" exact component={Localization} />
      <PrivateRoute
        path="/comprovanteLocador"
        exact
        component={ComprovanteLocador}
      />
      <PrivateRoute
        path="/comprovanteLocatario"
        exact
        component={ComprovanteLocatario}
      />
      <PrivateRoute path="/direcionamento" exact component={Direcionamento} />
      <PrivateRoute path="/bike" exact component={SignUpBike} />
      <PrivateRoute
        path="/bicicleta-filtro"
        exact
        component={BicicletaFiltro}
      />
      <PrivateRoute path="/card" exact component={Locador} />
      <Route path="/*" exact component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
