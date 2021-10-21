import styled from "styled-components";

export const RowBlocks = styled.div`
  display: block;
  @media (min-width: 1025px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 10%;
    margin: auto;

    
  }
`;

export const RowBlock = styled.div`
  margin-top: 6%;
  margin-left: auto;
    margin-right: auto; 
    width: 40%;
    border: 1px solid black;
    border-radius: 40px;
    margin-bottom: 100px;

  h1 {
    width: 80%;
    margin: auto;
    letter-spacing: 0.07em;
    font-size: 40px;
    margin-top: 60px;
  }

  h3 {
    width: 80%;
    margin: auto;
    letter-spacing: 0.07em;
    margin-top: 20px;
    color: #054107;
  }
  p {
    width: 80%;
    margin: auto;
    line-height: 35px;
    font-size: 20px;
    letter-spacing: 0.07em;
  }

  a{
    text-decoration: none;
  }
`;


export const InputContainer = styled.div`
  display: flex;
  margin: auto;
  width: 80%;
  justify-content: space-between;
`;
