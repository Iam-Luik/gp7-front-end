import styled from "styled-components";

export const SelectFilter = styled.div`
  background-color: #d8d8d8;
  width: 100%;
  height: 10vh;
  box-sizing: border-box;
  padding: 0px 50px 0px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.div`
  width: 100%;
  min-height: 80vh;
  padding: 30px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-row-gap: 30px;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80vh;
  margin: auto;
`;
