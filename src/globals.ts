import { createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --Gray-100: #F2F2F2;
        --Gray-200: #D9D9D9;
        --Gray-300: #808080;
        --Gray-400: #333333;
        --Gray-500: #262626;
        --Gray-600: #1A1A1A;
        --Gray-700: #0D0D0D;
        --Purple: #8284FA;
        --PurpleDark: #5E60CE;
        --Blue: #4EA8DE;
        --BlueDark: #1E6F9F;
        --Danger: #E25858;
    }


* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html{
    @media (max-width: 1080) {
        font-size: 93.5%;
    }
    @media (max-width: 720) {
        font-size: 87.5%;
    }
}
 
body {
    background: var(--Gray-600);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button{
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: pointer;
}
`