import styled from 'styled-components'

export const MessageContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MessageContent = styled.div`
    width: 30%;
    height: 25vh;

    background-color: #FFFFFF;
    border-radius: 15px;

    overflow: hidden;

    @media(max-width: 425px) {
        width: 60%;
    }

`

export const MessageText = styled.p`
    height: 70%;
    padding: 15px;
    text-align: center;

    color: #0d171f;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const MessageButton = styled.button`
    width: 50%;
    height: 30%;

    color: ${props => props.type === 'negative' ? '#E57878' : '#78E5D5'};
    background-color: #FFF;
    border: none;
    border-top: 1px solid #CCC;

    transition: background-color .7s ease;
    transition: color .7s ease;

    cursor: pointer;

    :hover {
        background-color: ${props => props.type === 'negative' ? '#E57878' : '#78E5D5'};
        color: #FFF;
    }
`