export interface UploadedFileProps {
    file: File,
    id: string,
    name: string,
    readableSize: string,
    preview: string,
    progress: number,
    uploaded: boolean,
    error: boolean,
    url: string,
    visible: boolean
    selected: boolean
}