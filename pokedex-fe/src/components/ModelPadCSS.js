import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
export const ItemPad = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
export const InputFrom = styled.input`
  display: flex;
  border-radius: 0.5rem;
  border-style: solid;
  border-width: 2px;
  width: 15rem;
  height: 2rem;
  margin-bottom: 1rem;
`;
