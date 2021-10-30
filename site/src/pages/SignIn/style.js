import styled from "styled-components";

export const Container = styled.div`
  min-height: 63vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RowBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  -webkit-box-shadow: 0px 0px 51px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 51px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 51px -20px rgba(0, 0, 0, 0.75);
  border-radius: 40px;

  padding: 40px 60px;

  h3 {
    color: #054107;
  }
`;
