import styled from "styled-components";
export const Avatar = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
  width: 100%;
  img {
    width: 150px;
    height: 150px;
    border-radius: 100px;
  }
`;
export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 28px;
  width: 100%;
  margin-top: 28px;
  justify-content: space-between;

  .css-kw4yk8-MuiInputBase-root-MuiFilledInput-root:after {
    border-bottom: 2px solid #054107 !important;
  }

  .css-au3a9q-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #054107 !important;
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
