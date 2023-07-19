import { createGlobalStyle } from "styled-components";
// import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background: ${(props) => props.theme["white"]};
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 768px) {
        html {
            font-size: 87.5%;
        }
    }
`;
