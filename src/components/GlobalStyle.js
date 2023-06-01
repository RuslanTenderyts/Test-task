import { createGlobalStyle } from 'styled-components';
import  bgrCart from "components/img/bgrCart.png"
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  background-color: #2e2487;
  background-image: url(${bgrCart});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 60%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

  p {
    margin: 0;
  }  
`;

 