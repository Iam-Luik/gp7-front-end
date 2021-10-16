import styled from "styled-components";

export const Divisona = styled.header`

margin: 2vh;
  overflow: hidden;
  height: 58vh;
    width: 22vw;
    border: 1px solid black;
    border-radius: 40px;

    h1{text-align: center;
    font-size: 1.5rem;};

span{
    display: flex;
  justify: center;
  flex-direction: column;
  align-items:center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size:1.3rem;
}
      img{
        width: 100%
       }
}
 `;

 export const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 5%;
  button {
    border-radius: 5px;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background: none;
    cursor: pointer;
    padding: 15px 65px;
    display: inline-block;
    margin: 15px 30px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    position: relative;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;

    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      transition: all 0.3s;
    }
  }

  button {
    border: 1px solid #054107;
    color: #054107;
    &:after {
      width: 0%;
      height: 100%;
      top: 0;
      left: 0;
      background: #054107;
    }

    &:hover,
    &:active {
      color: white;
    }

    &:hover:after,
    &:active:after {
      width: 100%;
    }
  }
`;
