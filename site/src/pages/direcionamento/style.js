import styled from "styled-components";


export const RowBlockLeft = styled.div`
  display: flex;

  @media (min-width: 1025px) {
    /* background-color: tomato; */
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto; 

    border: 1px solid black;
    border-radius: 40px;
    /* border-right: 5px solid purple; */
    width: 38%;
   

    h1 {
      padding-top: 50px;
      align-items: center;
      width: 80%;
      margin: auto;
      letter-spacing: 0.07em;
      margin-bottom: 50px;
      font-size: 39px;
      

      :after {
        content: "";
        width: 0;
        height: 3px;
        background: #00ab30;
        display: block;
        transition: 0.4s;
      }
  
      :hover:after {
        width: 100%;
      }
    }

    i{
        font-size: 60px;
    }

    b{
      font-size: 20px;
      
  }



    h2 {
      width: 80%;
      margin: auto;
      letter-spacing: 0.07em;
      margin: 0;
      padding-bottom: 50px;
      margin-top: -50px;
      font-weight: normal;
    }

    h3 {
        width: 80%;
        margin: auto;
        letter-spacing: 0.07em;
        margin: 0;
        padding-bottom: 30px;
        margin-top: 50px;
      }

      h4 {
        width: 80%;
        margin: auto;
        letter-spacing: 0.07em;
        margin: 0;
        padding: 20px 10px 10px 10px;
      }

      span {
        margin-bottom: 60px;
      }

    p {
      width: 80%;
      margin: auto;
      line-height: 35px;
      font-size: 20px;
      letter-spacing: 0.07em;
      font-style: italic;
    }
    a{
      text-decoration: none;
    }

  }
`;


export const ColBlocks = styled.div`
  display: block;
  @media (min-width: 1025px) {
    /* background-color: turquoise; */
    display: flex;
    align-items: center;
    flex-direction: initial;
    padding: 5% 0;
    margin-bottom: 70px;
    margin-left: auto;
    margin-right: auto; 
  }
`;

