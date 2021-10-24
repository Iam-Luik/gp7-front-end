import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SignUpLocador from '../pages/SignUpLocador';
import SignUpLocatario from '../pages/SignUpLocatario';
import SignIn from '../pages/SignIn';
import Rent from '../pages/Rent';
import Localization from '../pages/Localization';
import Direcionamento from '../pages/Direcionamento';
import SignUpBike from '../pages/SignUpBike';
import ComprovanteLocador from '../pages/ComprovanteLocador';
import ComprovanteLocatario from '../pages/ComprovanteLocatario';
import BicicletaFiltro from '../pages/BicicletaFiltro';
import Locador from '../pages/Locador';
import NotFound from '../pages/NotFound';


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
        <Route path="/comprovanteLocador" exact component={ComprovanteLocador} />
        <Route path="/comprovanteLocatario" exact component={ComprovanteLocatario} />
        <Route path="/direcionamento" exact component={Direcionamento} />
        <Route path="/bike" exact component={SignUpBike} />
        <Route path="/bicicleta-filtro" exact component={BicicletaFiltro} />
        <Route path="/card" exact component={Locador} />
        <Route path="/*" exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  )

}

export default Routes;