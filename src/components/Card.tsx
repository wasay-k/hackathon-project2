

type CardProps = {
    cardHeader: string;
    cardText?: string;
    color?: string;
    btnText?: string;
    imageSrc?:string;
    svg?: React.FC<React.SVGProps<SVGSVGElement>>
    onClick?: () => void;
    overlay?: boolean
}

const Card: React.FC<CardProps> = ({ cardHeader, cardText, color, btnText, onClick, overlay,imageSrc, svg }) => {
    return (
        <div className={`card w-50 bg-primary shadow-md max-h-50 hover:bg-accent`} onClick={onClick}>
            <div className="card-body flex flex-row">
                <h2 className="card-title">{cardHeader}</h2>
                {cardText? (
                    <p>{cardText}</p>
                ):(
                    imageSrc? (
                        <img src={imageSrc} height={128} width={128}/>
                    ):(
                        svg && <svg/>
                    )
                    
                )}
                <div className="card-actions justify-end">
                    {btnText ? (
                        <button className="btn btn-primary" onClick={onClick}>{btnText}</button>
                    ) : (
                        null
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card;
