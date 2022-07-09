import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        direction:rtl;
        font-family:'IRANSans'
    }
    h1,h2,h3,p{
        margin:0;
        padding:0
    }

    ul{
        list-style:none
    }

`;
