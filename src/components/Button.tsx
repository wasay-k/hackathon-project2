import React from "react";

type ButtonProps = {
    buttonText: string,
    clickEvent: () => void
    mode?: "warning" | "accent"
    tooltip?: string
}

export default function Button({ buttonText, clickEvent, mode, tooltip }: ButtonProps) {
    const ButtonModeMap = {
        warning: "btn btn-warning",
        accent: "btn btn-accent"
    }
    const TooltipModeMap = {
        warning: "tooltip tooltip-warning",
        accent: "tooltip tooltip-accent"
    }
    if (tooltip) {
        return (
            <div className="form-control mt-6">
                <div className={mode ? TooltipModeMap[mode] : "tooltip"} data-tip={tooltip}>
                    <button className={mode ? `${ButtonModeMap[mode]}` : "btn btn-primary"} onClick={clickEvent}>{buttonText}</button>
                </div>
            </div>
        )
    }
    return (
        <div className="form-control mt-6">
            <button className={mode ? `${ButtonModeMap[mode]}` : "btn btn-primary"} onClick={clickEvent}>{buttonText}</button>
        </div>
    )
}