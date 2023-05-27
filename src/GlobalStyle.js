import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    background-color: ${({isDarkMode}) => isDarkMode ? "black" : "white"};
    color: ${({isDarkMode}) => isDarkMode ? "white" : "black"};
}
a {
    color: ${({isDarkMode}) => isDarkMode ? "white" : "black"};
    text-decoration: none;
}
`;

export default GlobalStyle;