import styled from "styled-components";

export const InputContainer = styled.div`
  .MuiFormControl-root {
    width: 100%;
  }

  p {
    color: red;
    margin-top: -15px;
    margin-bottom: 15px;
  }

  h3 {
    color: #2e7d32;
  }

  .button-wrapper{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 100%;
    background-color: #054107;
    :hover {
      background-color: #054107;
    }
  }
`;
