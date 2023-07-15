import {FC, useState } from "react";
import "./Main.scss"
const Main: FC = () => {
    const [active, setActive] = useState(true)

    const changeButton = () => {
        setActive(!active)
    }

    return (
        <div className="Main">
            <img className="img" src="public/img/images.jpg"/>
            <button className={ active ? "active" : "disable"} onClick={changeButton}>Click</button>
        </div>
    )
}

export default Main;