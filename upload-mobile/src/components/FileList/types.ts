export interface UploadedFileProps {
    file: File,
    id: string,
    name: string,
    readableSize: string,
    preview: string,
    uploaded: boolean,
    progress: number,
    error: boolean,
    url: string,
    visible: boolean,
}

export interface FileListProps extends React.FC{
    data: UploadedFileProps[]
}