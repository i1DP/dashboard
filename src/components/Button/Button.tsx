import "./button.scss"
import {FC} from "react"

interface Button {
    className?: string;
    label?: string
    onClick?: () => void;
  }

const Button: FC<Button> = (props) => {
    const { className, label, onClick } = props;
    
    return (
        <>
            <button className={className ? `button ${className}` : "button"} onClick={onClick}>{label}</button>
        </>
    )
}

export default Button;