import React, { useEffect } from "react";
import Typist from "react-typist";
import GeolocationIcon from "../../assets/geolocation-icon.png";
import LoginIcon from "../../assets/login-icon.png";
import RentIcon from "../../assets/rent-icon.png";
import SecurityIcon from "../../assets/security-icon.png";
import Footer from "../../components/Footer";
import NavbarHome from "../../components/NavbarHome";
import Api from "../../services/api";
import LocacatarioImg from "../../assets/bike-ilustracao-1.svg";
import LocadorImg from "../../assets/bike-ilustracao-2.svg";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import {
  Banner,
  ColItens,
  RowBlock,
  RowBlock2,
  RowBlock3,
  RowBlocks,
  RowBlocks2,
  RowBlocks3,
  RowItens,
} from "./style";

const Home = () => {
  const history = useHistory();
  useEffect(() => {
    Api.get("usuario/todos")
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const irParaCadastroLocatario = () => {
    history.push("/locatario");
  };

  const irParaCadastroLocador = () => {
    history.push("/locador");
  };

  return (
    <>
      <NavbarHome />

      {/* MAIN BANNER */}
      <Banner>
        <h1>
          <Typist>
            Aqui sua bicicleta
            <br /> é um investimento.
          </Typist>
        </h1>
      </Banner>

      {/* SECTION 1 */}
      <RowBlocks>
        <h1>Nosso diferencial</h1>
        <RowBlock>
          <RowItens>
            <img alt="Geolocation" src={GeolocationIcon} />
            <ColItens>
              <h2>Disponibilidade</h2>
              <p>
                Utilize nossas bicicletas, quando e onde quiser, basta procurar
                a bicicleta e alocar.
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

      <RowBlocks2>
        <RowBlock2>
          <img alt="Ilustração" src={LocacatarioImg} />
          <div>
            <h1>Alugar</h1>
            <p>
              A imove oferece para você que deseja alugar uma bicicleta para
              passear, praticar esporte, viajar ou até mesmo trabalhar, uma
              solução para seus problemas de não encontrar uma bicicleta fácil.
              Você precisa realizar um cadastro no nosso site para conseguir ter
              acesso a várias bicicletas e escolher a que mais te agradar.
            </p>
            <Button
              variant="contained"
              color="success"
              onClick={irParaCadastroLocatario}
            >
              iniciar cadastro
            </Button>
          </div>
        </RowBlock2>
      </RowBlocks2>

      {/* <RowBlocks3>
        <RowBlock3>
          <div>
            <h1>Alocar</h1>
            <p>
              Se você tem uma bicicleta parada e deseja colocar ela para fazer
              uma renda extra, aqui na imove você pode cadastrar quantas
              bicicletas você quiser e expor elas ao público, sem precisar sair
              de casa.
            </p>
            <Button
              variant="contained"
              color="success"
              onClick={irParaCadastroLocador}
            >
              iniciar cadastro
            </Button>
          </div>
          <img alt="Ilustração locador" src={LocadorImg} />
        </RowBlock3>
      </RowBlocks3> */}

      {/* SECTION 2 */}
      {/* <RowBlocks2>
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
        <Link to="/direcionamento">
          <h1>Cadastre-se</h1>
        </Link>
      </RowBlocks2> */}

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
