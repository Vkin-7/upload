import { createGlobalStyle } from 'styled-components'

import 'react-circular-progressbar/dist/styles.css'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    body {
        background-color: #27455c;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        text-rendering: optimizeLegibility;
        -webkit-font-smooth: antialiased;
    }


    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-moz-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-webkit-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-o-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @-ms-keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

    @keyframes fadeOut {
        0% {opacity:1;}
        100% {opacity:0;}
    }

    @-moz-keyframes fadeOut {
        0% {opacity:1;}
        100% {opacity:0;}
    }

    @-webkit-keyframes fadeOut {
        0% {opacity:1;}
        100% {opacity:0;}
    }

    @-o-keyframes fadeOut {
        0% {opacity:1;}
        100% {opacity:0;}
    }

    @-ms-keyframes fadeOut {
        0% {opacity:1;}
        100% {opacity:0;}
    }

    @keyframes growUp {
        0% {width:0;}
        100% {width:30%;}
    }

    @-moz-keyframes growUp {
        0% {width:0;}
        100% {width:30%;}
    }

    @-webkit-keyframes growUp {
        0% {width:0;}
        100% {width:30%;}
    }

    @-o-keyframes growUp {
        0% {width:0;}
        100% {width:30%;}
    }

    @-ms-keyframes growUp {
        0% {width:0;}
        100% {width:30%;}
    }

    @keyframes controllMenuOpen {
        0% {height: 0;}
        100% {height: 32vh}
    }

    @-moz-keyframes controllMenuOpen {
        0% {height: 0;}
        100% {height: 32vh}
    }

    @-webkit-keyframes controllMenuOpen {
        0% {height: 0;}
        100% {height: 32vh}
    }

    @-o-keyframes controllMenuOpen {
        0% {height: 0;}
        100% {height: 32vh}
    }

    @-ms-keyframes controllMenuOpen {
        0% {height: 0;}
        100% {height: 32vh}
    }

    @keyframes controllMenuClose {
        0% {height: 32vh;}
        100% {height: 0;}
    }

    @-moz-keyframes controllMenuClose {
        0% {height: 32vh;}
        100% {height: 0;}
    }

    @-webkit-keyframes controllMenuClose {
        0% {height: 32vh;}
        100% {height: 0;}
    }

    @-o-keyframes controllMenuClose {
        0% {height: 32vh;}
        100% {height: 0;}
    }

    @-ms-keyframes controllMenuClose {
        0% {height: 32vh;}
        100% {height: 0;}
    }
`

export { GlobalStyle }