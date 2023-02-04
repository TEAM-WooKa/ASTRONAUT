import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
      ${reset}
      * {
        box-sizing: border-box;
      }
      body{
        font-family: Pretendard, -apple-system, sans-serif;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      input, button {
        background-color: transparent;
        border: none;
        outline: none;
      }
      h1, h2, h3, h4, h5, h6{
        font-family: Pretendard, -apple-system, sans-serif;
      }
      
      #__next {
        min-height: 100vh;
      }
      .container {
        height: 100%;
        min-height: 100vh;
        display: flex;
        flex: 1;
        justify-content: center;
      }
    `;

export default GlobalStyle;
