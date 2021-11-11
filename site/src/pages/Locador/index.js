import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardStatusBicicleta from "../../components/CardStatusBicicleta";
import BicicletaControll from "../../components/BicicletaControll";
import { DivCards} from "./style";
import GeneralButton from "../../components/GeneralButton";
import { Link } from "react-router-dom";

const bicicletas = [{
  imagem:
    "https://caloi.com/wp-content/uploads/2021/05/Caloi-City-Tour-Comp-lateral-1500x900.jpg",
  titulo: "E-VIBE ELITE FS PRO",
  preco: "R$ 5,00 por hora",
},
{
  imagem:
    "https://caloi.com/wp-content/uploads/2021/05/Caloi-City-Tour-Comp-lateral-1500x900.jpg",
  titulo: "E-VIBE ELITE FS PRO",
  preco: "R$ 5,00 por hora",
},
{
  imagem:
    "https://caloi.com/wp-content/uploads/2021/05/Caloi-City-Tour-Comp-lateral-1500x900.jpg",
  titulo: "E-VIBE ELITE FS PRO",
  preco: "R$ 5,00 por hora",
},{
  imagem:
    "https://caloi.com/wp-content/uploads/2021/05/Caloi-City-Tour-Comp-lateral-1500x900.jpg",
  titulo: "E-VIBE ELITE FS PRO",
  preco: "R$ 5,00 por hora",
}
];

const retornoApi = [
    {
        titulo: "MONTAIN BIKE CALLOI",
     imagem: "https://caloi.com/wp-content/uploads/2021/05/Caloi-EVibe-Elite-Pro-lateral_2000-1500x900.jpg",
     status: "Alugada", 
     locatario: "Matheus",
    dia: "20/10/2002", 
     hora: "20:00", 
    },
    {
        imagem: "https://caloi.com/wp-content/uploads/2021/05/Caloi-EVibe-Elite-Pro-lateral_2000-1500x900.jpg",
        status: "Parada", 
        locatario: "Matheus",
       dia: "20/10/2002", 
        hora: "20:00", 
       },
    {
     imagem: "https://caloi.com/wp-content/uploads/2021/05/Caloi-EVibe-Elite-Pro-lateral_2000-1500x900.jpg",
     locador: "Matheus",
     dia: "20/10/2002", 
     hora: "20:00",
    },
    {
     imagem: "https://caloi.com/wp-content/uploads/2021/05/Caloi-EVibe-Elite-Pro-lateral_2000-1500x900.jpg",
     locador: "Matheus",
     dia: "20/10/2002", 
     hora: "20:00",
    }
]

const Locatario = () => {
    return (
        <>
        <Navbar />
      
        <DivCards>
            <CardStatusBicicleta props={bicicletas}></CardStatusBicicleta>
        </DivCards>
        <Link to="/bicicleta-filtro">
        <GeneralButton button="ADICIONAR" />
        </Link>

        {/* <Link to="/bike">
        <GeneralButton button="ADICIONAR" />
        </Link> */}
             <Footer />  
        </>
        );
      };
      
export default Locatario;