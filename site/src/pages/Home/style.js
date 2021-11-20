import styled from "styled-components";
import BannerImage from "../../assets/mountain-bike.jpg";

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 550px;
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${BannerImage});
  background-size: cover;
  h1 {
    margin-top: 100px;
    color: white;
    line-height: 75px;
    letter-spacing: 0.1em;
    font-weight: bold;
    text-transform: uppercase;
    span{
      color: green;
    }
  }
  
`;

export const RowBlocks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 350px;
  margin: 100px 0 100px 0;


  h1 {
    width: 80%;
    margin: auto;
    line-height: 56px;
    letter-spacing: 0.07em;

  }

`;

export const RowBlocks2 = styled.div`
  background-color: #D8D8D8;
  padding-top: 70px;
  padding-block: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;

  h1 {
    margin: auto;
    color: #00ab30;
    
  }
  p {
    padding-top: 20px;
  }
  
`;


export const RowBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 50%;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  width: 337px;
  height: 156px;
  background-color: green;
`;


export const RowItens = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;


  img {
    width: 80px;
  }
`;

export const ColItens = styled.div`
  margin: 0px 30px;

  p {
    width: 80%;
  } 
`;

export const CardsStyle = styled.div`
  display: flex;
  justify-content: center;
`;
