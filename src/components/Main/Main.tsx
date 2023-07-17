import {FC, useState } from "react";
import "./main.scss"
import Button from "../Button/Button";
const Main: FC = () => {
    const [active, setActive] = useState(true)

    const changeButton = () => {
        setActive(!active)
        console.log(active);
    }

    return (
        <div className="Main">
            <Button className={ active ? "active" : "disable"} label={"Click"} onClick={changeButton}/>
        </div>
    )
}

export default Main;