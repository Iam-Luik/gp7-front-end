import styled from "styled-components";

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 28px;
  width: 100%;
  justify-content: space-between;

  .css-kw4yk8-MuiInputBase-root-MuiFilledInput-root:after {
    border-bottom: 2px solid #054107 !important;
  }

  .css-au3a9q-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #054107 !important;
  }

  .css-xt3kbl-MuiFormControl-root {
    min-width: 100%;
    margin: 0px;
    margin-bottom: 16px;
  }

  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    border-color: #2e7d32;
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

export const Section = styled.div`
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-row-gap: 30px;

  a {
    text-decoration: none;
  }
`;

export const RowBlocks = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  img {
    margin-top: 30px;
    width: 10%;
  }
  h2 {
    letter-spacing: 0.07em;
    font-size: 20px;
    font-weight: 400;
    margin-left: 0px;
  }
`;

export const TxtContainer = styled.div`
  display: flex;
  width: 100%;

  h3 {
    margin: auto;
    font-size: 15px;

    font-weight: 400;
    margin-left: 16px;
  }
  button {
    width: 100%;
    background-color: #054107;
    :hover {
      background-color: #054107;
    }
  }
`;

export const FileInput = styled.div`
  input {
    width: 100%;
  }
`;

export const Select = styled.div`
  width: 100%;
`;
