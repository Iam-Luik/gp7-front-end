import GeolocationIcon from "../../assets/geolocation-icon.png";
import LoginIcon from "../../assets/login-icon.png";
import RentIcon from "../../assets/rent-icon.png";
import SecurityIcon from "../../assets/security-icon.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Api from "../../services/api";
import React,{useEffect} from "react";

import {
  Banner,
  RowBlock,
  RowBlocks2,
  RowItens,
  ColItens,
  RowBlocks,
} from "./style";

const Home = () => {
  useEffect(() => {
   Api.get("usuario/todos")
    .then((response) => console.log(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }, []);
  return (
    <>
      <Navbar />

      {/* MAIN BANNER */}
      <Banner>
        <h1>Aqui sua bike é um investimento.</h1>
      </Banner>

      {/* SECTION 1 */}
      <RowBlocks>
        <h1>Conheça a Imove</h1>
        <RowBlock>
          <RowItens>
            <img alt="Geolocation" src={GeolocationIcon} />
            <ColItens>
              <h2>Geolocalização</h2>
              <p>
                Localização em tempo real das bicicletas mais próximas a você.
              </p>
            </ColItens>
          </RowItens>
          <RowItens>
            <img alt="Login" src={LoginIcon} />
            <ColItens>
              <h2>Segurança</h2>
              <p>
                Sistema de cadastro, normas e multas tudo para deixar nossa
                aplicação mais segura.
              </p>
            </ColItens>
          </RowItens>
        </RowBlock>
        <RowBlock>
          <RowItens>
            <img alt="Security" src={SecurityIcon} />
            <ColItens>
              <h2>Acesso</h2>
              <p>
                Acessibilidade para todos os usuarios com nosso chat de locador
                para locatário.
              </p>
            </ColItens>
          </RowItens>
          <RowItens>
            <img alt="Rent" src={RentIcon} />
            <ColItens>
              <h2>Locação</h2>
              <p>
                Locação, rápida, prática e sustentável com preços acessiveis.
              </p>
            </ColItens>
          </RowItens>
        </RowBlock>
      </RowBlocks>

      {/* SECTION 2 */}
      <RowBlocks2>
        <h1>Escolha seu plano</h1>
        <p>
          Aproveite por mais tempo, adquira nosso plano mensal ou semanal com
          descontos.
        </p>
      </RowBlocks2>

      <Footer />
    </>
  );
};

export default Home;
