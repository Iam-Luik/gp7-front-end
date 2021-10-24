import styled from "styled-components";

export const Divisona = styled.header`

margin: 2vh;
  overflow: hidden;
  height: 66vh;
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

#spanButton{
display: flex;
flex-direction: row;
margin-top: 110px;
}
      img{
        width: 100%
       }
 `;

 export const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  outline: none;
  button {
    border-radius: 5px;
    color: white;
    background: #3AA33E;
    padding: 10px 25px;
    margin: 15px;
    text-transform: uppercase;
    font-weight: 700;
    outline: none;
    border: none;
  }

  
`;

export const ButtonEdit = styled.div`
   display: flex;
  justify-content: center;
  outline: none;
  button {
    border-radius: 5px;
    color: white;
    background: #0094FF;
    padding: 10px 25px;
    margin: 15px;
    text-transform: uppercase;
    font-weight: 700;
    outline: none;
    border: none;
  }
`;

export const ButtonDel = styled.div`
   display: flex;
  justify-content: center;
  outline: none;
  button {
    border-radius: 5px;
    color: white;
    background: red;
    padding: 10px 25px;
    margin: 15px;
    text-transform: uppercase;
    font-weight: 700;
    outline: none;
    border: none;
  }
`;
