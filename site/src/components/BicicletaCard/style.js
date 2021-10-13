import styled from "styled-components";

export const CardStyle = styled.div`
    background-color: white;
    width: 350px;
    height: 450px;
    padding: 24px;
    -webkit-box-shadow: 0px 0px 51px -20px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 51px -20px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 51px -20px rgba(0,0,0,0.75);
    border-radius: 16px;
    img{
        width: 318px;
        height: 191px; 
    }

    .imagem{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .divisor{
        height: 3px;
        width: 100%;
        background-color: green;
    }
`;