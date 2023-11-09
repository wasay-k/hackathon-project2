import { SetStateAction } from "react"

interface fileInputProps {
    setState: React.Dispatch<SetStateAction<FileList | null>>
}

const FileInput: React.FC<fileInputProps> = ({ setState }) => {
    return (
        <input type="file"
            className="file-input file-input-bordered file-input-accent w-full max-w-xs"
            onChange={(event) => { setState(event.target.files) }} />
    )
}

export default FileInput;