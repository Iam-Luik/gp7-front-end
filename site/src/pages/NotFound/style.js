import styled from "styled-components";

export const ColBlocks = styled.div`
  display: block;
  display: flex;
  flex-direction: initial;
  padding: 5% 0;

  span {
    width: 10px;
    display: flex;
    align-items: center;
    margin-left: 100px;
  }

  b {
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

export const Container = styled.div`
  min-height: 90vh;
  width: 100%;
  box-sizing: border-box;
  padding: 48px 250px;
  display: flex;

  justify-items: space-between;
  align-items: center;
  div {
    width: 100%;
  }
`;
