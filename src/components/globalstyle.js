import { createGlobalStyle } from 'styled-components';
// for global styling
const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  font-family: Gill Sans, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  text-align: center;
}
`;

export default GlobalStyle;