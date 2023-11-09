import { FC } from "react";

interface Props {
    progressValue: number
}

const Progress: FC<Props> = ({ progressValue }) => {
    return (
        <progress className="progress progress-success w-56" value={progressValue} max="100"></progress>
    )
}

export default Progress;