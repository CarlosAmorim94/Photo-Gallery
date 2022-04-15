import styled from "styled-components";

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 23%;
  height: 20rem;
  margin: 1%;
  position: relative;

  img {
    max-width: 100%;
    height: 60%;
    margin-bottom: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .name-photo {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }


  button {
    background: #F82D30;
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 5px;
    width: 30PX;
    border: 1px solid #fff;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: filter 0.2s;
    opacity: 0.5;
    
    &:hover {
      scale: 1.5;
      opacity: 1;
    }
  }

  @media (max-width: 760px) {
    width: 47%;
  }
`
