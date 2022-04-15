import styled from "styled-components";

export const Container = styled.main`
  background-color: #27282f;
  color: #fff;
  min-height: 100vh;
`

export const Content = styled.section`
  margin: auto;
  max-width: 1000px;
  padding: 30px 0;
`

export const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`

export const ScreenWarning = styled.div`
  text-align: center;

  .emoji {
    font-size: 50px;
    margin-bottom: 20px;
  }
`

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`

export const UploadForm = styled.form`
  background-color: #3d3f43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;
  
  input[type=submit] {
    background-color: #756df4;
    border: 0;
    color: #fff;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 20px;
    cursor: pointer;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 0.7;
    }
  }
`