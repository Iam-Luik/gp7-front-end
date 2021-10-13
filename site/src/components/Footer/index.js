import "./styles.css";
import instalogo from "../../assets/instagram-logo.png";
import facebooklogo from "../../assets/facebook-logo.png";
import linkedinlogo from "../../assets/linkedin-logo.png";
import imoveLogo from "../../assets/imove-logo.png";

function Footer() {
  return (
    <div>
      <footer>
        <div class="footer-container">
          <div class="caixa">
          <div class="footer-info">
            <div class="footer-links">
              <h2>Produtos</h2>
              <ul>
                <li>Viajar</li>
                <li>Alugar</li>
              </ul>
            </div>
            <div class="footer-links">
              <h2>Empresa</h2>
              <ul>
                <li>Sobre nós</li>
              </ul>
            </div>
            <div class="footer-links">
              <h2>Recursos</h2>
              <ul>
                <li>FAQ</li>
                <li>Fale conosco</li>
              </ul>
            </div>
            <div class="logo-img"><img src={imoveLogo} alt="BigCo Inc. logo"/></div>
            </div>
          </div>
          <div class="footer-contato">
            <div class="footer-contato-small">
              <div class="footer-box-contato">
                <i class="fa fa-envelope"></i>
                <div class="logo-contato"><img src={instalogo} alt="BigCo Inc. logo"/></div>
              </div>
              <div class="footer-box-contato">
                <i class="fa fa-instagram"></i>
                <div class="logo-contato"><img src={facebooklogo} alt="BigCo Inc. logo"/></div>
              </div>
              <div class="footer-box-contato">
                <i class="fa fa-whatsapp"></i>
                <div class="logo-contato"><img src={linkedinlogo} alt="BigCo Inc. logo"/></div>
              </div>
            </div>
              <span color='white'>Imove © 2021. Todos os direitos reservados. Desenvolvido por Imove</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
