import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
export const Ipad = styled.div`
  width: 60vw;
  height: 70vh;
  border-style: solid;
  border-right-width: 4em;
  border-left-width: 3em;
  border-top-width: 1em;
  border-bottom-width: 1em;
  border-radius: 1em;
  flex-direction: column;
`;

export const UserStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 80%;
  margin: 3em 3em 3em 3em;
`;

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 80%;
  margin: 3em 3em 3em 3em;
`;
export const InputFrom = styled.input`
  display: flex;
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 2px;
  width: 15rem;
  height: 2rem;
  margin-bottom: 1rem;
`

export const ItemBlock = styled.div`
  padding : 0px;
  border-width : 0px;
  border-style : none;
`

export const SearchFrom = styled.input`
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 2px;
  width: 30rem;
  height: 2rem;
  margin-bottom: 1rem;
`

export const BoxData = styled.div`
  display: flex;
  width: 90%;
  height: 60%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
`

export const BoxTextPokemon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`

export const BoxImage = styled.div`
  width: 15.5em;
  height: 21.5em;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
`