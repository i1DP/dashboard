import {FC, useState } from "react";
import Button from "../inputs/Button/Button";
import "./main.scss"
const Main: FC = () => {
    const [disabled, setDisabled] = useState(true)

    const changeButton = () => {
        setDisabled(!disabled)
    }

    return (
        <div className="Main">
            <div className="items">           
                <Button label={"Label"} onClick={changeButton}/>
                <Button label={"Label"} disabled={disabled}/>
            </div>
        </div>
    )
}

export default Main;