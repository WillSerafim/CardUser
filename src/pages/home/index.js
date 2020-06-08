import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import {useHistory} from 'react-router-dom';

export default function Home() {
  const [user, setUser] = useState('');
  const history = useHistory();
  const [erro, setErro] = useState(false);
  
  function handlePesquisa() {
    const url = `https://api.github.com/users/${user}`;

    axios.get(url).then(response => {
      
      const gitData = response.data;

      localStorage.setItem('gitData', JSON.stringify(gitData));
      setErro(false);
      history.push('/user');
    }).catch(erro => {
      setErro(true)
    });
  }

  return (
    <>
      <S.Container>
        <S.Input type="text" 
          name="user" 
          id="user" 
          placeholder="Insira seu user do Github..." 
          value={user}
          onChange={e => setUser(e.target.value)}
        />
        <S.Button 
          type="button" 
          onClick={handlePesquisa}
        >Pesquisar</S.Button >
        {erro ? <S.ErrorMsg>Ops, ocorreu uma falha com sua solicitação</S.ErrorMsg> : ''}
      </S.Container>
    </>
  );
}
