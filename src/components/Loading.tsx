

interface LoadingProps {
    size: "xs" | "sm" | "md" | "lg";
}

const Loading: React.FC<LoadingProps> = ({ size }) => {

    return (
        <span className={`loading loading-ring loading-${size}`}></span>
    )
}

export default Loading;