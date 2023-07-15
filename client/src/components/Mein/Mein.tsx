import {FC, useState } from "react";
import "./Mein.scss"
const Mein: FC = () => {
    const [active, setActive] = useState(true)

    const changeButton = () => {
        setActive(!active)
    }
    return (
        <div className="Mein">
            <button className={ active ? "active" : "disable"} onClick={changeButton}>Click</button>
        </div>
    )
}

export default Mein;