import styled from 'styled-components';

export const Card = styled.div `
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 300px;
  border-radius: 5px;
`;

export const Img = styled.img `
  border-radius: 5px 5px 0 0;
  width: 100%;
`;

export const Header = styled.div `
  display: flex;
`;

export const Items = styled.div `
  display: flex;
  padding-left: 10px;
  align-items: center;
`;

export const Name = styled.h2 `
  font-family: sans-serif;
  font-size: 1.2vw;
  padding-left: 10px;
`;

export const TextInfo = styled.h3 `
  font-family: sans-serif;
  font-size: 1vw;
  padding-left: 10px;
  color: #7f8c8d;
  width: 100%;
`;

export const ExpandMore = styled.button `
  border-style: none;
  margin-left: auto;
  padding-right: 15px;
  height: 1.5rem;
  background-color: transparent;
  cursor: pointer;
  height: 1.7rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
  
`;

export const Container = styled.div `
  width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`; 