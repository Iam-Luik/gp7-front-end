import styled from "styled-components";

export const RowBlockLeft = styled.div`
  display: block;
  @media (min-width: 1025px) {
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

    img {
      width: 39%;
    }
  }
`;

export const BlockTitle = styled.div`
  display: block;
  @media (min-width: 1025px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 10%;
  }

  h1 {
    width: 80%;
    margin: auto;
    letter-spacing: 0.07em;
    font-size: 40px;
    margin: 40px 0px;
  }
`;

export const BlockTitle2 = styled.div`
  display: block;
  @media (min-width: 1025px) {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 50%;  */
    height: 10%;
    margin: auto;
  }

  h1 {
    /* width: 80%; */
    margin: auto;
    letter-spacing: 0.07em;
    font-size: 30px;
    margin: 23px 0px;
  }
`;

export const RowBlockRight = styled.div`
  display: block;
  border-left: 1px solid black;
  @media (min-width: 1025px) {
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
    display: flex;
    flex-direction: initial;
    padding: 5% 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  margin: auto;
  width: 90%;
  /* margin-left: 65px;
  width: 60%; */
  justify-content: space-between;
`;

export const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
`;
