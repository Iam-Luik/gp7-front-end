import styled from "styled-components";


export const RowBlockLeft = styled.div`
  display: block;
  

  @media (min-width: 1025px) {
    /* background-color: tomato; */
    display: flex;
    align-items: center;
    flex-direction: column;

    border-right: 1px solid black;
    /* border-right: 5px solid purple; */
    width: 50%;


    h1 {
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

  span{
    font-weight: normal;
}

    h2 {
      width: 80%;
      margin: auto;
      letter-spacing: 0.07em;
      margin: 0;
      padding-bottom: 50px;
      margin-top: -50px;
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

    p {
      width: 80%;
      margin: auto;
      line-height: 35px;
      font-size: 20px;
      letter-spacing: 0.07em;
      font-style: italic;
    }
  }
`;

export const RowBlockRight = styled.div`
  display: block;
  @media (min-width: 1025px) {
    /* background-color: tomato; */
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;


    h1 {
      width: 80%;
      margin: auto;
      letter-spacing: 0.07em;
      font-size: 40px;
      margin: 40px 0px;
    }

    h2 {
      width: 80%;
      margin: auto;
      letter-spacing: 0.07em;
      text-align: center;  
      font-size: 60px;
    }

    p {
      width: 80%;
      margin: auto;
      line-height: 35px;
      font-size: 20px;
      letter-spacing: 0.07em;
      font-style: italic;
    }
  }
`;

export const ColBlocks = styled.div`
  display: block;
  @media (min-width: 1025px) {
    /* background-color: turquoise; */
    display: flex;
    flex-direction: initial;
    padding: 5% 0;
    margin-bottom: 70px;
  }
`;

export const TitleComprovante = styled.div`
    h1{
       text-align: center;
       font-size: 50px;
    }
`;


