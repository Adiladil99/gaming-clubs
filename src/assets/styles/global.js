import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,*:focus,*:hover{
    outline:none;
  }
  body, div, h1 {
    padding: 0;
    overflow-x: hidden;
    margin: 0 ;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  hr {
    border-top: 1px solid #e5e5e5;
  }
  #root {    
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  p {
    margin: 0;
    padding: 0;
  }
  .slick-list {margin: 0 -10px; user-select:none}
  .slick-slide>div {padding: 0 10px;}
`