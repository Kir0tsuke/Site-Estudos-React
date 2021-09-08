import React, { useState } from 'react';
import logo from './logo.svg';
import '../Home/App.css';
import axios from 'axios';  
import * as S from './StyledHome';
import { useHistory } from 'react-router-dom';

//metodo axios sem api.github

// JSX = HTML dentro de uma função JavaScript

// <></> fragments = muito utilizado

// Componentização > Componentes do React
// Propriedades > Estados > Fonte da Verdade ?
// Hooks > useState

// react > single page aplications


function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);
    function handleNome() {
      axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
        const Repositories = response.data;
        const RepositoriesName = [];
        Repositories.map((repository) => {RepositoriesName.push(repository.name)})
        localStorage.setItem('RepositoriesName', JSON.stringify(RepositoriesName));
        setErro(false);
        history.push('/repositories');
      })
      .catch(err => {
        setErro(true);
      });

    }
    
  return (
    
    <S.HomeContainer>
    <S.Container>  
      <S.input id="usuarioNome " placeholder="Usuário" className="UsuárioInput" value={usuario} onChange={ e=> setUsuario(e.target.value)}/>
      <S.button href="http://localhost:3000/repositories" type="button" onClick={handleNome}>Nome</S.button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello {usuario} </h3>
        <p>
         Shit, Here we go again.
         </p>
         { erro ?  <S.Errormsg> Erro seu bosta </S.Errormsg> : '' }
      </header>
    </S.Container>
    </S.HomeContainer>
        );
  }
  
export default App;

// Use State é uma Função que retorna um Array[ usuario, setUsuario]
//                               1 Pos Estado inicial       2 Pos Função para setar o Valor



// Componentes controlados \/
//<input> pega o valor digitado e joga ele pro valor do estado <p> ficando sem valor 
// Setando o valor do <Input> para o valor atualizado do estado <p> ele não fica com estado vazio



