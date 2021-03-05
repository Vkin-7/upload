import styled from 'styled-components'

import { MdCheckCircle, MdError, MdRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md'


const Container = styled.ul`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media(max-width: 425px) {
        grid-template-columns: 1fr;
    }

`

const ListItem = styled.li`
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #444;
        margin-top: 15px;

        opacity: ${props => props.visible === true ? 1 : 0};

        animation: fadeIn ease 1.5s;
        -webkit-animation: fadeIn ease 1.5s;
        -moz-animation: fadeIn ease 1.5s;
        -o-animation: fadeIn ease 1.5s;
        -ms-animation: fadeIn ease 1.5s;

        transition: opacity .7s ease-in-out;
        -webkit-transition: opacity .7s ease-in-out;
        -moz-transition: opacity .7s ease-in-out;
        -ms-transition: opacity .7s ease-in-out;
        -o-transition: opacity .7s ease-in-out;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
        }
`

const FileInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    div {
        display: flex;
        flex-direction: column;
    }

`

const Preview = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    margin-right: 10px;
    position: relative;
    overflow: hidden;

    span {
        width: 35%;
        padding: 5px;
        border-radius: 50px 0 0 50px;;
        font-size: 12px;
        color: #999;
        margin-top: 5px;
        position: absolute;
        right: 0;
        top: 0;
        background-color: #FFFFFF;

        animation: growUp ease 2s;
        -webkit-animation: growUp ease 2s;
        -moz-animation: growUp ease 2s;
        -o-animation: growUp ease 2s;
        -ms-animation: growUp ease 2s;



        button {
            border: 0;
            background: transparent;
            color: #E57878;
            cursor: pointer;
        }
    }

    a {
        width: 30%;
        background-color: #FFFFFF;
        position: absolute;
        bottom: 5px;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px 0 0 50px;
        
        animation: growUp ease 2s;
        -webkit-animation: growUp ease 2s;
        -moz-animation: growUp ease 2s;
        -o-animation: growUp ease 2s;
        -ms-animation: growUp ease 2s;
    }
`

const ErrorIcon = styled(MdError)`
    position: absolute;
    left: 5px;
    top: 5px;

    animation: fadeIn ease 2s;
    -webkit-animation: fadeIn ease 2s;
    -moz-animation: fadeIn ease 2s;
    -o-animation: fadeIn ease 2s;
    -ms-animation: fadeIn ease 2s;
`

const CheckIcon = styled(MdCheckCircle)`
    position: absolute;
    left: 5px;
    top: 5px;

    animation: fadeIn ease 2s;
    -webkit-animation: fadeIn ease 2s;
    -moz-animation: fadeIn ease 2s;
    -o-animation: fadeIn ease 2s;
    -ms-animation: fadeIn ease 2s;
`

const UnselectedIcon = styled(MdRadioButtonUnchecked)`
    position: absolute;
    left: 5px;
    bottom: 5px;

    animation: fadeIn ease 2s;
    -webkit-animation: fadeIn ease 2s;
    -moz-animation: fadeIn ease 2s;
    -o-animation: fadeIn ease 2s;
    -ms-animation: fadeIn ease 2s;

    cursor: pointer;
`

const SelectedIcon = styled(MdRadioButtonChecked)`
    position: absolute;
    left: 5px;
    bottom: 5px;

    animation: fadeIn ease 2s;
    -webkit-animation: fadeIn ease 2s;
    -moz-animation: fadeIn ease 2s;
    -o-animation: fadeIn ease 2s;
    -ms-animation: fadeIn ease 2s;

    cursor: pointer;
`

export {
    Container,
    ListItem,
    FileInfo,
    Preview,
    ErrorIcon,
    CheckIcon,
    SelectedIcon,
    UnselectedIcon,
}