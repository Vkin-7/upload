import { useState } from 'react'
import { MdDeleteForever, MdDeleteSweep, MdSort, MdClose, MdRefresh } from 'react-icons/md'
import { Container, ControllButton, Content, Button } from '../../styles/controll_menu'

import { useSelector, useDispatch } from 'react-redux'
import { messageUpdate } from '../../store/actions/message'

export default function ControllMenu(props) {
    const selectedFiles = useSelector(state => state.selectedFiles)
    const [openMenu, setOpenMenu] = useState('')
    const [buttonStyles, setButtonStyles] = useState('')

    const dispatch = useDispatch()

    const { refreshFiles } = props

    function showAllMessage() {
        const newMessage = {
            text: 'You will delete all photos, Are you sure?',
            visible: true,
            context: 'deleteAll'
        }
        dispatch(messageUpdate(newMessage))
    }

    function showSelectedMessage() {
        const newMessage = {
            text: 'You will delete the selected photos, Are you sure?',
            visible: true,
            context: 'deleteSelected'
        }
        dispatch(messageUpdate(newMessage))
    }

    return (
        <Container>

            <ControllButton onClick={
                () => {
                    if (openMenu === '' || openMenu === 'close') {
                        setOpenMenu('open')
                        setTimeout(() => {
                            setButtonStyles('showDelete')
                        }, 900)
                    } else {
                        setButtonStyles('hideDelete')
                        setTimeout(() => {
                            setOpenMenu('close')
                        }, 900)
                    }
                }
            }>
                {(openMenu === 'close' || openMenu === '') ? (
                    <MdSort size={25} />
                ) : (
                        <MdClose size={25} />
                    )}
            </ControllButton>

            <Content className={openMenu}>
                <Button
                    onClick={showAllMessage}
                    className={`delete ${buttonStyles}`}
                >
                    <MdDeleteForever size={20} />
                </Button>
                <Button 
                    onClick={() => {
                        if(!!selectedFiles.length)
                            showSelectedMessage()
                        else
                            alert("You don't select any file")
                    }} 
                    className={`delete ${buttonStyles}`}
                >
                    <MdDeleteSweep size={20} />
                </Button>
                <Button onClick={() => {
                    if (openMenu === '' || openMenu === 'close') {

                    } else {
                        refreshFiles()
                    }
                }} className={`refresh ${buttonStyles}`}>
                    <MdRefresh size={20} />
                </Button>
            </Content>
        </Container>
    )
}