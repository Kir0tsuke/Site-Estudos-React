import style from "styled-components";

// Pesquisar sobre SAS //

export const HomeContainer = style.div``;

export const Container = style.div`
width: 100vw;
height: 100vh;
align-items: center;
justify-content: center;
`;


export const input = style.input`

heght: 3rem;
padding: 3px .5rem;
border: 2px solid #000;
border-radius: .25rem 0 0 .25rem;

&:focus, 
&:active {
    border: 2px solid #f56;
    outline: none;
    backgroud: #001;
}
`;

export const button = style.button`

height: 25px;
border: 2px solid #0f0;
backgroud: #00f;
color: #00f;
border-radius: 0 .25rem .25rem 0;

&:focus, {
    background: #f0f;
    border: 2px solid #f1f;
    box-shadow: 5px #fff;
}
&:active {
    outline: none;
    border: 2px solid #f1f;
    box-shadow: none;
`;

export const Errormsg = style.span`
    display: block;
    font-size: 5rem;
    text-align: center ;
    margin: 4px auto;
    color: #fff;
    border-radius: 40px;
    background-color: #474;
    padding: 5px 0;
    text-decoration: none;
`;