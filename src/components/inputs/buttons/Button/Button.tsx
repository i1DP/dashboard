import {FC} from "react"
import "./button.scss"

interface Button {
    label?: string
    disabled?: boolean;
    onClick?: () => void;
  }

const Button: FC<Button> = (props) => {
    const { label, disabled, onClick } = props;
    
    return (
        <button className={"button"} disabled={disabled}  onClick={onClick}>{label}</button>
    )
}

export default Button;