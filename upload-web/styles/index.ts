import styled from 'styled-components'

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
`

const Content = styled.div`
    width: 100vw;
    max-width: 80vw;
    min-height: 80vh;
    max-height: 484px;
    margin: 30px;
    background-color: #FFFFFF;
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    overflow-y:scroll;

    position: relative;

    @media(max-width: 425px) {
        min-width: 100vw;
        min-height: 100vh;
        margin: 0;
    }

    /* width */
    ::-webkit-scrollbar {
        width: 7px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        margin: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #182a38;
        border-radius: 15px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #0d171f;
    }
`


const DeleteButton = styled.button`
    width: 10vh;
    height: 10vh;

    
    border: none;
    border-radius: 50px;
    
    background-color: #E57878;
    color: #FFFFFF;
    cursor: pointer;

    position: fixed;
    right: 10px;
    bottom: 10px;

`

export {
    Container,
    Content,
    DeleteButton,
}