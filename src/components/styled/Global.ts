import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @media (max-width: 900px) {
        body {
            font-size: 12px;
        }
    }

    @media (max-width: 600px) {
        body {
            font-size: 8px;
        }
    }

    @media (max-width: 400px) {
        body {
            font-size: 6px;
        }
    }

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        min-width: 360px;
    }

    p {
        opacity:0.8;
    }

    img{
        width: 100%;
    }

    li {
        list-style-type: none;
    }
 
`;

export default GlobalStyles;
