import { FC } from "react"
import Button from "./Button";


interface DialogProps {
    header?: string;
    text: string;
    type: "choice" | "static"
    onPositiveResponse?: () => void;
    onNegativeResponse?: () => void;
    onStaticResponse?: () => void;
}


const Dialog: FC<DialogProps> = ({ header, text, type, onPositiveResponse, onNegativeResponse, onStaticResponse }) => {
    return (
        <div className="modal">
            <form className="modal-box">
                {header ? <h3 className="font-bold text-lg">Hello!</h3> : null}
                <p className="py-4">{text}</p>
            </form>
            <form className="modal-backdrop">
                {type === "choice" ? (
                    <div>
                        <Button buttonText="Yes" clickEvent={onPositiveResponse ? onPositiveResponse : () => { }} />
                        <Button buttonText="No" clickEvent={onNegativeResponse ? onNegativeResponse : () => { }} />
                    </div>
                ) : (
                    type === "static" ? (
                        <Button buttonText="OK" clickEvent={onStaticResponse ? onStaticResponse : () => { }} />
                    ) : (null)
                )}
            </form>
        </div>
    )
}
export default Dialog;