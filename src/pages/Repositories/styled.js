import styled from "styled-components";
import { Link } from 'react-router-dom';

export const container = styled.div`
width: 100vw;
max-width: 991px;
background: #ff0;
text-align: center;
border: solid 10px #0f0;
border-radius: 50px;
`;

export const title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    background: #000;
    margin: 25px 50px;
    color: #01f;
    border-radius: 20px 20px 20px 20px;
    `;
export const List = styled.ul`
    list-style: none;
    padding: 25px;
    margin: 50px;
    background: #000;
    font-family: sans-serif;
    `;

export const ListItem = styled.li`
    margin: 10px 15px;
    backgroud: #000;
    color: #01f;
    padding: 10px;
    border: solid 1px #f5f;
    border-radius: 10px 0 0 10px;
    `;
export const LinkHome = styled(Link)`
    display: block;dd
    width: 50px;
    text-align: center ;
    margin: 2px auto;
    color: #fff;
    background-color: #000;
    padding: 5px 0;d
    text-decoration: none;
    `;

