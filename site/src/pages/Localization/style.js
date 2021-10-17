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
      margin: 0;

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

    h2 {
      width: 80%;
      margin: auto;
      letter-spacing: 0.07em;
      margin: 0;
      padding-bottom: 50px;
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
  }
`;

export const TitleLocalization = styled.div`
    h1{
       text-align: center;
    }
`;


