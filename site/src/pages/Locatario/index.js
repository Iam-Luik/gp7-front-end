import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardStatusBicicleta from "../../components/CardStatusBicicleta";
import { DivCards} from "./style";
import GeneralButton from "../../components/GeneralButton";


const retornoApi = [
    {
     imagem: "https://caloi.com/wp-content/uploads/2021/05/Caloi-EVibe-Elite-Pro-lateral_2000-1500x900.jpg",
     status: "Alugada", 
     locador: "Matheus",
     hora: "20:00", 
     
    },
    {
     imagem: "https://caloi.com/wp-content/uploads/2021/05/Caloi-EVibe-Elite-Pro-lateral_2000-1500x900.jpg",
     status: "Parada",
     locador: "Henrique",
     hora: "20:00", 
    }
]

const Locatario = () => {
    return (
        <>
        <Navbar />
        <DivCards>
            <CardStatusBicicleta props={retornoApi}></CardStatusBicicleta>
             
        </DivCards>
             <Footer />  
        </>
        );
      };
      
export default Locatario;