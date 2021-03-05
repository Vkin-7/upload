import { 
    MessageContainer,
    MessageContent,
    MessageText,
    MessageButton,
} from '../../styles/message'

import api from '../../services/api'

import { useSelector, useDispatch } from 'react-redux'
import { uploadedFilesUpdate, uploadedFilesReset } from '../../store/actions/uploaded_files'
import { selectedFilesReset } from '../../store/actions/selected_files'
import { messageReset } from '../../store/actions/message'


export default function Message() {
    const message = useSelector(state => state.message)
    const selectedFiles = useSelector(state => state.selectedFiles)
    const uploadedFiles = useSelector(state => state.uploadedFiles)
    const dispatch = useDispatch()

    async function deleteAll(){
        try {
            const response = await api.delete('posts/all')
      
            if (response.status === 200) {
                const newFiles = uploadedFiles.map(file => {return { ...file, visible: false }})
                dispatch(uploadedFilesUpdate(newFiles))
                dispatch(messageReset())
                // setInterval(async () => {
                    
                // }, 700)
                dispatch(uploadedFilesReset())
            } else
              alert(response.data.message)
      
          } catch (err) {
            alert(err)
          }
    }

    async function deleteSelected(){
        const data: { listId: string[] } = { listId:  selectedFiles.map(file => file.id)}

        if(data.listId.length === 0)
          return dispatch(messageReset())
      
        try{
           
          const response = await api.delete('posts/list', {data: data})
      
      
          if(response.status === 200){
            const newFiles = uploadedFiles.filter(file => data.listId.indexOf(file.id) !== -1 ?
            false : file )
      
            dispatch(uploadedFilesUpdate(newFiles))
            dispatch(messageReset())
            dispatch(selectedFilesReset())
          }
        }catch(err){
          alert(err)
        }
    }

    return (
        <MessageContainer>
            <MessageContent>
                <MessageText>{message.text}</MessageText>

                <MessageButton
                    onClick={() => { 
                        switch(message.context){
                            case 'deleteAll':
                                return deleteAll()
                            case 'deleteSelected':
                                return deleteSelected()
                            default:
                                return null
                        }
                    }}>
                    Yes
                </MessageButton>
                <MessageButton
                    onClick={() => {
                        dispatch(messageReset())
                    }}
                    type='negative'
                >
                    Cancel
          </MessageButton>

            </MessageContent>
        </MessageContainer>
    )
}