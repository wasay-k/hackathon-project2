import { SVGProps } from "./svg-styles";


const UserIcon:React.FC<SVGProps> = ({fillColor,strokeColor}) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill={fillColor} stroke={strokeColor}  viewBox="0 0 16 16" ><path d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 1.5 c 0 1 1 1 1 1 h 10 s 1 0 1 -1 v -1.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0"/></svg>
    )
        
    
}

export default UserIcon;