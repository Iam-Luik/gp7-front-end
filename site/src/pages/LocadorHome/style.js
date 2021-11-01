import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  grid-row-gap: 30px;

  a {
    text-decoration: none;
  }
`;
