import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @media (max-width: 1600px) {
        body {
            font-size: 12px;
        }
    }
    /* @media (max-width: 900px) {
        body {
            font-size: 12px;
        }
    } */

    @media (max-width: 600px) {
        body {
            font-size: 10px;
        }
    }

    @media (max-width: 300px) {
        body {
            font-size: 8px;
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

    .wrapper{
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: 2fr 20fr 2fr;
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
    .swiper-button-prev {
  color: white !important;
}
.swiper-button-next {
  color: white !important;
}

 
`;

export default GlobalStyles;
