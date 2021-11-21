import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 150px 0px 150px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;

  .logo {
    span {
      font-size: 40px;
      font-weight: 700;
    }
  }

  span {
    color: white;
  }

  a {
    color: white;
    text-decoration: none;
    color: white;
    font-size: 13.33333px;
  }

  ul {
    color: white;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.1em;
    font-variant: small-caps;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;

    @media only screen and (max-width: 900px) {
      width: 55%;
    }

    @media only screen and (max-width: 800px) {
      width: 60%;
      font-size: 5px;
    }
  }

  ul a {
    color: white;
    text-transform: none;
    list-style-type: none;
    cursor: pointer;
    text-decoration: none;
    font-family: "Circular Black";

    :after {
      content: "";
      width: 0;
      top: 0;
      height: 2px;
      background: #00ab30;
      display: block;
      margin: auto;
      transition: 0.4s;
    }

    :hover:after {
      width: 100%;
      background: #00ab30;
    }

    @media only screen and (max-width: 600px) {
      width: 84%;
      font-size: 0.8rem;
    }
  }

  img {
    height: 70px;

    @media only screen and (max-width: 800px) {
      height: 8vh;
    }

    @media only screen and (max-width: 600px) {
      height: 6vh;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    height: 10vh;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 10vh;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: #3aa33e;
    border-radius: 3px;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    padding: 10px;
    @media only screen and (max-width: 768px) {
      padding: 2px;
      font-size: 5px;
    }
  }
`;

export const HeaderSubscriber = styled.div`
  @media only screen and (max-width: 768px) {
    background: red;
    width: 400px !important;
  }
`;
