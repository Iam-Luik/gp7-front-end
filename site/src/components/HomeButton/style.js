import styled from "styled-components";
import ArrowImage from "../../assets/home-arrow.svg";

export const ButtonContainer = styled.div`
  padding: 40px;
  background-color: aqua;
`;

export const ButtonStyle = styled.button`
  text-align: left;
  background: tomato;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.1em;
  outline: none;
  border: none;
  padding: 25px 80px;
  border-bottom: 2px black solid;
  .div {
    height: 20px;
    width: 50px;
    background-image: url(${ArrowImage});
  }
`;
