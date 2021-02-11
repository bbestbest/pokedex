import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: "Roboto", sans-serif;
`;
export const Ipad = styled.div`
  width: 60vw;
  height: 70vh;
  border-color: #353535;
  border-style: solid;
  border-right-width: 4em;
  border-left-width: 3em;
  border-top-width: 1.5em;
  border-bottom-width: 1.5em;
  border-radius: 1em;
  flex-direction: column;
`;

export const UserStatusStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  position: relative;
  width: 80%;
  height: 80%;
  margin: 5%;
  margin-left: 10%;
`;

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: 80%;
  margin: 5%;
  overflow: auto;
  color: #ff0105;
`;

export const InputForm = styled.input`
  display: flex;
  height: 3rem;
  width: 100%;
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 2px;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const ItemBlock = styled.div`
  padding: 0px;
  border-width: 0px;
  border-style: none;
`;

export const SearchFrom = styled.input`
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 2px;
  width: 30rem;
  height: 2rem;
  margin-bottom: 1rem;
`;

export const BoxData = styled.div`
  display: flex;
  width: 90%;
  height: 60%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
`;

export const BoxTextPokemon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const BoxImage = styled.div`
  width: 15.5em;
  height: 21.5em;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 100%;
  margin: 1.5rem 0;
  background-color: #ff0102;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const TextBackground = styled.div`
  display: flex;
  height: 5rem;
  flex-direction: column;
  border-radius: 5rem;
  margin: 0.5em 0;
  background-color: #eeeeee;
  justify-content: center;
  padding: 0 2rem;
`;
