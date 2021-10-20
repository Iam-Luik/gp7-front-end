import styled from "styled-components";
import BannerImage from "../../assets/wave.svg";

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 550px;
  background-image: url(${BannerImage});
  background-size: cover ;
  h1 {
    color: white;
    text-transform: uppercase;
    line-height: 75px;
    letter-spacing: 0.1em;
  }
`;

export const RowBlocks = styled.div`
  display: block;
  @media (min-width: 1025px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    margin: auto;

    h1 {
      width: 80%;
      margin: auto;
      line-height: 56px;
      letter-spacing: 0.07em;
    }
  }
`;

export const RowBlocks2 = styled.div`
  display: block;
  @media (min-width: 1025px) {
    padding-top: 70px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;

    h1 {
      margin: auto;
      line-height: 0px;
      letter-spacing: 0.07em;
    }
    p {
      padding-top: 20px;
    }
  }
`;


export const RowBlock = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    height: 50%;
  }
`;

export const Cards = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    justify-content: center;
    width: 337px;
    height: 156px;
    background-color: green;
  }
`;


export const RowItens = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
  }

  img {
    width: 80px;
  }
`;

export const ColItens = styled.div`
  @media (min-width: 1025px) {
    margin: 0px 30px;

    p {
      width: 80%;
    }
  }
`;

export const CardsStyle = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 5%; */
`;
