import styled from "styled-components";


export const RowBlock = styled.div`
  margin: 14px auto 14px auto;
  width: 500px;
  -webkit-box-shadow: 0px 0px 51px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 51px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 51px -20px rgba(0, 0, 0, 0.75);
  border-radius: 40px;
  padding: 40px 60px;

  a{
    text-decoration: none;
  }

`;


export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 28px;
  width: 100%;
  justify-content: space-between;
`;
