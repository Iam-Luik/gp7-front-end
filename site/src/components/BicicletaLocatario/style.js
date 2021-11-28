import styled from "styled-components";

export const CardStyle = styled.div`
  width: 300px;
  height: 450px;
  -webkit-box-shadow: 0px 0px 51px -20px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 51px -20px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 51px -20px rgba(0, 0, 0, 0.75);
  border-radius: 16px;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  img {
    width: 250px;
    height: 200px;
  }
  .upload {
    width: 250px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    svg {
      height: 75px;
      width: 75px;
    }
  }

  .imagem {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .botoes {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button {
      width: 100%;
      margin-bottom: 12px;
    }
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
