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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .uploading-photo {
    width: 60px;
    height: 60px;
  }
`

export const Header = styled.header`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`

export const ScreenWarning = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 2rem;
`

export const PhotoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
`

export const UploadForm = styled.form`
  background-color: #3d3f43;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;

  .sent-image {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  input[type=submit] {
    background-color: #756df4;
    border: 0;
    color: #fff;
    margin: 10px;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;
    cursor: pointer;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 0.7;
    }
  }
`