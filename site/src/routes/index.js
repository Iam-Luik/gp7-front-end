import { BrowserRouter, Route, Switch } from "react-router-dom";
import BicicletaFiltro from "../pages/BicicletaFiltro";
import ComprovanteLocador from "../pages/ComprovanteLocador";
import ComprovanteLocatario from "../pages/ComprovanteLocatario";
import Direcionamento from "../pages/Direcionamento";
import Home from "../pages/Home";
import Localization from "../pages/Localization";
import NotFound from "../pages/NotFound";
import Rent from "../pages/Rent";
import SignIn from "../pages/SignIn";
import SignUpBike from "../pages/SignUpBike";
import SignUpLocador from "../pages/SignUpLocador";
import SignUpLocatario from "../pages/SignUpLocatario";
import LocadorHome from "../pages/LocadorHome";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route path="/locador" exact component={SignUpLocador} />
        <Route path="/locatario" exact component={SignUpLocatario} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/rent" exact component={Rent} />
        <Route path="/localization" exact component={Localization} />
        <Route
          path="/comprovanteLocador"
          exact
          component={ComprovanteLocador}
        />
        <Route
          path="/comprovanteLocatario"
          exact
          component={ComprovanteLocatario}
        />
        <Route path="/direcionamento" exact component={Direcionamento} />
        <Route path="/bike" exact component={SignUpBike} />
        <Route path="/bicicleta-filtro" exact component={BicicletaFiltro} />
        <Route path="/locador-home" exact component={LocadorHome} />
        {/* <Route path="/locatario-home" exact component={LocatarioHome} /> */}
        <Route path="/*" exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
