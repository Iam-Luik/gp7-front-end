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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  -webkit-box-shadow: 0px 0px 51px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 51px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 51px -20px rgba(0, 0, 0, 0.75);
  border-radius: 40px;
  margin-bottom: 100px;
  padding: 80px;

  h3 {
    color: #054107;
  }
`;
