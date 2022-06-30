import styled from "styled-components";

export const Card = styled.div`
  border-radius: 0.3em;
  padding: 0;
  margin: 0;
  background: #1e002d;
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(black, 0.5);
  &:hover {
    transform: translateY(10px);
    &:before {
      opacity: 1;
    }
    .info {
      opacity: 1;
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 0.3em;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }
  img {
    width: 100%;
  }
`;

export const Info = styled.div`
  margin: 0px;
  position: absolute;
  z-index: 3;
  color: white;
  opacity: 0;
  transform: translateY(10px);
  transition: 0.5s;
  p {
    margin: auto auto;
    font-size: 1.5em;
  }
  button {
    font-size: 1.5em;
    padding: 0.4em;
    margin: auto auto;
    outline: none;
    border: none;
    border-radius: 3px;
    background: white;
    color: black;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      background: #5c0361;
      color: white;
    }
  }
`;
