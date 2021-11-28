import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import SignUpLocador from "../pages/SignUpLocador";
import SignUpLocatario from "../pages/SignUpLocatario";
import SignIn from "../pages/SignIn";
import Rent from "../pages/Rent";
import Localization from "../pages/Localization";
import Direcionamento from "../pages/Direcionamento";
import SignUpBike from "../pages/SignUpBike";
import ComprovanteLocador from "../pages/ComprovanteLocador";
import ComprovanteLocatario from "../pages/ComprovanteLocatario";
import BicicletaFiltro from "../pages/BicicletaFiltro";
import Locador from "../pages/Locador";
import Locatario from "../pages/Locatario";
import NotFound from "../pages/NotFound";
import Senha from "../pages/Senha";
import Email from "../pages/Email";
import Codigo from "../pages/Codigo";
import UpdateUser from "../pages/UpdateUser";

async function isAuthenticated() {
  return true;
}

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

      <Route path="/locador" exact component={SignUpLocador} />
      <Route path="/locatario" exact component={SignUpLocatario} />
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
      <Route path="/direcionamento" exact component={Direcionamento} />
      <PrivateRoute path="/bike" exact component={SignUpBike} />
      <PrivateRoute path="/alterar-usuario" exact component={UpdateUser} />

      <PrivateRoute
        path="/bicicleta-filtro"
        exact
        component={BicicletaFiltro}
      />
      <PrivateRoute path="/cardLocador" exact component={Locador} />
      <PrivateRoute path="/cardLocatario" exact component={Locatario} />
      <Route path="/*" exact component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
