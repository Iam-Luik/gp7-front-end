import styled from "styled-components";

export const RowBlockLeft = styled.div`
  display: block;
  @media (min-width: 1025px) {
    /* background-color: tomato; */
    display: flex;
    align-items: center;
    flex-direction: column;
    /* border-right: 5px solid purple; */
    width: 50%;
    height: 10%;

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
  border-left: 1px solid black;
  @media (min-width: 1025px) {
    /* background-color: tomato; */
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 10%;


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
