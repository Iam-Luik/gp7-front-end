import styled from "styled-components";

export const ColBlocks = styled.div`
    display: block;
    display: flex;
    flex-direction: initial;
    padding: 5% 0;

  span{
    width: 10px;
    display: flex;
    align-items: center;
    margin-left: 100px;
    }  

    b{
    width: 560px;
    display: flex;
    margin-left: 100px;
    }  

  h1 {
    font-size: 70px;
    margin-bottom: 0px;
  }

  h2 {
    margin-top: 0px;
    margin-bottom: 200px;
    font-size: 39px; 
  }
`;


export const RowBlockLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

export const RowBlockRight = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;

`;