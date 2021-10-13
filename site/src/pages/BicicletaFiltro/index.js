import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Select from "../../components/Select";

const categoria = 
  {
    titulo: "categoria",
    valores:  [
      {
        value: 1,
        label: "eletrica"
      },
      {
        value: 2,
        label: "manual"
      },
      {
        value: 3,
        label: "bike cross"
      }
    ]
  }
;

const BicicletaFiltro = () => {
  return (
    <>
      <Navbar />
        <Select props={categoria}/>
      <Footer />  
    </>
  );
};

export default BicicletaFiltro;