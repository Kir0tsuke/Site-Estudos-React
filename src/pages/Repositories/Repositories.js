import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories(){
    const history = useHistory();
    const [ Repositories, setRepositories ] = useState([]);
    useEffect(() => {
        let RepositoriesName = localStorage.getItem('RepositoriesName');
        if(RepositoriesName != null ) {

        RepositoriesName = JSON.parse(RepositoriesName);
        setRepositories(RepositoriesName);
        console.log(RepositoriesName)
        localStorage.clear();
        } else {
            history.push('/');
        }

    }, []);
    return(
            <S.container>
                <S.title>Repositórios Abertos</S.title>
                    <h3>Meus Repositórios</h3>
                        <S.List>
                            {Repositories.map(repository => {
                                return(
                                    <S.ListItem>Reporitório: { repository }</S.ListItem>
                                )
                            })}
                        </S.List>
                        <S.LinkHome to="/">Voltar</S.LinkHome>
                    </S.container>

    )    
};