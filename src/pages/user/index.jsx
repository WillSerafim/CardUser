import React, {useEffect, useState} from 'react';
import * as S from './styled';
import 'font-awesome/css/font-awesome.min.css'
import {Link} from 'react-router-dom';

export default function User() {
  const [gitData, setGitData] = useState([]);

  useEffect(() => {
    let gitData = localStorage.getItem('gitData');
    
    gitData = JSON.parse(gitData);
    
    setGitData(gitData);
    localStorage.clear();
  }, []);

  return (
    <>
      <S.Container>
        <S.Card>
          <S.Img src={gitData.avatar_url} alt="Avatar"></S.Img>
          <S.Header>
            <S.Name>{gitData.name}</S.Name>
            <S.ExpandMore>
              <i class="fa fa-caret-down fa-2x" aria-hidden="true"></i>
            </S.ExpandMore>
          </S.Header>
          <div>
            <S.Items>
                <i class="fa fa-building" aria-hidden="true"></i>
                <S.TextInfo>Company: {gitData.company ? gitData.company : 'Não possui'}</S.TextInfo>
            </S.Items>
            <S.Items>
                <i class="fa fa-globe" aria-hidden="true"></i>
                <S.TextInfo>Blog: {gitData.blog ? gitData.blog : 'Não possui'}</S.TextInfo>
            </S.Items>
            <S.Items>
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <S.TextInfo>Location: {gitData.location ? gitData.location : 'Não possui'}</S.TextInfo>
            </S.Items>
            <S.Items>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <S.TextInfo>E-mail: {gitData.email ? gitData.email : 'Não possui'}</S.TextInfo>
            </S.Items>
            <S.Items>
                <i class="fa fa-user" aria-hidden="true"></i>
                <S.TextInfo>Bio: {gitData.bio ? gitData.bio : 'Não possui'}</S.TextInfo>
            </S.Items>
            <S.Items>
                <i class="fa fa-database" aria-hidden="true"></i>
                <S.TextInfo>Repositories: {gitData.public_repos ? gitData.public_repos : 'Não possui'}</S.TextInfo>
            </S.Items>
            <S.Items>
                <S.TextInfo>Hireable: {gitData.hireable ? gitData.hireable : 'Não possui'}</S.TextInfo>
            </S.Items>
          </div>
        </S.Card>
      </S.Container>
      <Link to="/">Voltar para página principal</Link>
    </>
  );
}