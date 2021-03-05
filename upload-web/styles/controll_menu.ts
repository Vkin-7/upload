import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    right: 10px;
    bottom: 10px;
`

export const ControllButton = styled.div`
    width: 10vh;
    height: 10vh;

    border-radius: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #27455c;
    color: #FFFFFF;
    cursor: pointer;
    
    -webkit-box-shadow: 0px 0px 10px 1px #000000; 
    box-shadow: 0px 0px 10px 1px #000000;
`

export const Content = styled.div`
    width: 9vh;
    height: 0;

    background-color: #27455c;

    border-radius: 50px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    position: absolute;
    top: 0;

    &.open {
        height: 32vh;
        top: -34vh;

        animation: controllMenuOpen ease 1.5s;
        -webkit-animation: controllMenuOpen ease 1.5s;
        -moz-animation: controllMenuOpen ease 1.5s;
        -o-animation: controllMenuOpen ease 1.5s;
        -ms-animation: controllMenuOpen ease 1.5s;

        transition: top ease 1.5s;
        
        -webkit-box-shadow: 0px 0px 10px 1px #000000; 
        box-shadow: 0px 0px 10px 1px #000000;
    }

    &.close {
        height: 0;
        top: 0;

        animation: controllMenuClose ease 1.5s;
        -webkit-animation: controllMenuClose ease 1.5s;
        -moz-animation: controllMenuClose ease 1.5s;
        -o-animation: controllMenuClose ease 1.5s;
        -ms-animation: controllMenuClose ease 1.5s;

        transition: top ease 1.5s;
        -webkit-box-shadow: 0px 0px 10px 1px #000000; 
        box-shadow: 0px 0px 10px 1px #000000;
    }
`

export const Button = styled.div`
    width: 7vh;
    height: 7vh;

    border-radius: 50px;

    opacity: 0;
    display: none;

    
    color: #FFFFFF;
    cursor: pointer;
    

    &.delete {
        background-color: #E57878;
    }

    &.refresh {
        background-color: #78E5D5;
    }


    &.showDelete {
        opacity: 1;
        
        display: flex;
        justify-content: center;
        align-items: center;

        animation: fadeIn ease 1.5s;
        -webkit-animation: fadeIn ease 1.5s;
        -moz-animation: fadeIn ease 1.5s;
        -o-animation: fadeIn ease 1.5s;
        -ms-animation: fadeIn ease 1.5s;
    }

    &.hideDelete {
        opacity: 0;
        display: none;

        animation: fadeOut ease 1.5s;
        -webkit-animation: fadeOut ease 1.5s;
        -moz-animation: fadeOut ease 1.5s;
        -o-animation: fadeOut ease 1.5s;
        -ms-animation: fadeOut ease 1.5s;
    }
`
