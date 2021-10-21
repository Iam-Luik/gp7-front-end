import styled from "styled-components";

export const RowBlocks = styled.div`
/* border: 1px solid #000000; */
    margin-top: 50px;
    margin-bottom: 10px;   
    width: 80%;
    margin-left: auto;
    margin-right: auto; 
`;

export const RowBlock = styled.div`
  margin-top: 6%;
  margin-left: auto;
    margin-right: auto; 
    width: 74%;
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
