import { ProgressContainer } from '../../styles/progress'
import { CircularProgressbar } from 'react-circular-progressbar'
import { useSelector } from 'react-redux'

export default function Progress() {
    const load = useSelector(state => state.load)

    return (
        <ProgressContainer>
            <CircularProgressbar
                styles={{
                    root: { width: '10%', position: 'absolute' },
                    path: { stroke: '#27455c' }
                }}
                strokeWidth={10}
                value={load.progress}
            />
        </ProgressContainer>
    )
}
