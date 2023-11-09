

type AlertProps = {
    alertState: "success"|"warning"|"error"|"info";
    alertMessage:string;
}

const Alert:React.FC<AlertProps> = ({alertState,alertMessage}) => {
    return(
        <div className={`alert alert-${alertState} m-4`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>{alertMessage}</span>
        </div>
    )
}

export default Alert;