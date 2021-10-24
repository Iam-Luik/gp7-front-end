import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GeneralButton from "../../components/GeneralButton";
import { Link } from "react-router-dom";
import FormSingIn from "../../components/Forms/FormSignIn/index";

import {  RowBlock,  } from "./style";

const SignIn = () => {

  return (
    <>
      <Navbar />
      <RowBlock>
        <div>
          
                <FormSingIn/>

        </div> 
      </RowBlock>
      <Footer />
    </>
  );
};

export default SignIn;
