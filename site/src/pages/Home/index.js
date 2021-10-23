import GeolocationIcon from "../../assets/geolocation-icon.png";
import LoginIcon from "../../assets/login-icon.png";
import RentIcon from "../../assets/rent-icon.png";
import SecurityIcon from "../../assets/security-icon.png";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Cards from "../../components/Cards";
import HomeButton from "../../components/HomeButton";
import Api from "../../services/api";
import React, { useEffect } from "react";

import {
  Banner,
  RowBlock,
  RowBlocks2,
  RowItens,
  ColItens,
  RowBlocks,
  CardsStyle,
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
        <h1>Aqui sua <span>bicicleta</span> <br/> é um <span>investimento.</span></h1>
         
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fill-opacity="1" d="M0,192L24,176C48,160,96,128,144,138.7C192,149,240,203,288,234.7C336,267,384,277,432,256C480,235,528,181,576,165.3C624,149,672,171,720,186.7C768,203,816,213,864,186.7C912,160,960,96,1008,85.3C1056,75,1104,117,1152,160C1200,203,1248,245,1296,261.3C1344,277,1392,267,1416,261.3L1440,256L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>  
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

        <CardsStyle>
        <Cards
          title="Mensal"
          label="A partir de
          R$ 209,90, por R$ 7,90 o dia"
          link="29 dias sem preocupação na devolução
          Use o quanto necessario por 30 dias
          Preço acessivel e vantajoso
          Menos de R$ 8,00 por dia "
        />

        <Cards
          title="Semanal"
          label="A partir de
          R$ 62,90, por R$ 8,99 o dia"
          link="06 dias sem preocupação na devolução
          Use o quanto necessario por 7 dias
          Preço acessivel e vantajoso
          Menos de R$ 9,90 por dia"
        />
      </CardsStyle>

      </RowBlocks2>

      
      {/* <RowBlocks2>
        <p>
          Quer algo mais pratico e rapido ? Conheça nosso plano avulso
        </p>
        <HomeButton />
      </RowBlocks2> */}
      <Footer />
    </>
  );
};

export default Home;
