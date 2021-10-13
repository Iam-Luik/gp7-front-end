import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SignUpLocador from '../pages/SignUpLocador';
import SignUpLocatario from '../pages/SignUpLocatario';
import SignIn from '../pages/SignIn';
import Rent from '../pages/Rent';
import Localization from '../pages/Localization';
import Direcionamento from '../pages/direcionamento';
import SignUpBike from '../pages/SignUpBike';
import ComprovanteLocador from '../pages/ComprovanteLocador';
import ComprovanteLocatario from '../pages/ComprovanteLocatario';
import BicicletaFiltro from '../pages/BicicletaFiltro';


const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/locador" component={SignUpLocador} />
        <Route path="/locatario" component={SignUpLocatario} />
        <Route path="/login" component={SignIn} />
        <Route path="/rent" component={Rent} />
        <Route path="/localization" component={Localization} />
        <Route path="/comprovanteLocador" component={ComprovanteLocador} />
        <Route path="/comprovanteLocatario" component={ComprovanteLocatario} />
        <Route path="/direcionamento" component={Direcionamento} />
        <Route path="/bike" component={SignUpBike} />
        <Route path="/bicicleta-filtro" component={BicicletaFiltro} />
      </Switch>
    </BrowserRouter>
  )

}

export default Routes;