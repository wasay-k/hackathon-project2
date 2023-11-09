import { SetStateAction } from "react"

interface textAreaProps {
    setState: React.Dispatch<SetStateAction<string>>
    size: string;
}

const TextArea: React.FC<textAreaProps> = ({ setState, size }) => {
    return (
        <textarea className={`textarea textarea-accent textarea-${size}`} placeholder="Type here" onChange={(e) => { setState(e.target.value) }}></textarea >
    )
}

export default TextArea;