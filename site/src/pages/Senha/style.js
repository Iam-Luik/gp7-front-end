import styled from "styled-components";

export const RowBlocks = styled.div`

margin-top: 30px;
margin-bottom: 10px;   
width: 80%;
margin-left: auto;
    margin-right: auto;
    img{
      margin-top: 30px;
        width:5%;
    }
    h3 {
    
    letter-spacing: 0.07em;
    font-size: 20px;
    font-weight: 400;
    margin-left: 0px;
  }
  
`;

export const RowBlock = styled.div`
  margin-top: 6%;
  margin-left: auto;
    margin-right: auto; 
    width: 45%;
    border: 1px solid black;
    border-radius: 40px;
    margin-bottom: 100px;

    h1 {
      width: 80%;
      margin: auto;
      letter-spacing: 0.07em;
      font-size: 35px;
      margin-top: 60px;
    }

    h2 {
        width: 80%;
        margin: auto;
        letter-spacing: 0.07em;
        font-size: 20px;
        margin-top: -40px;
        font-weight: 400;
      }
    p {
      width: 80%;
      margin: auto;
      line-height: 35px;
      font-size: 20px;
      letter-spacing: 0.07em;
    }
  
`;


export const InputContainer = styled.div`
  display: flex;
  margin: auto;
  width: 80%;
  justify-content: space-between;
  margin-left: 130px;


  button{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 130px;
    }


  form {
    display: flex;

  }
  
`;

export const TxtContainer = styled.div`
  display: flex;
  width: 100%;
  h3 {
    
      margin: auto;
      letter-spacing: 0.07em;
      font-size: 20px;
      margin-top: 50px;
      font-weight: 400;
      margin-left: 0px;
    }

    img{
      margin-top: 2vw;
      margin-right: 8vh;
      margin-bottom: 2vw;
        width:10%;
    }
`;