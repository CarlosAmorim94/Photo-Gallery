import styled from "styled-components";

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    max-width: 100%;
    display: block;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  span {
    display: block;
  }

  button {
    background: #F82D30;
    width: 100%;
    margin-top: 20px;
    height: 30px;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`
