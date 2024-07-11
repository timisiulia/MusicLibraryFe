import { RightSide } from "../right-side/RightSide"
import img1 from "../../images/image1.jpg"
import "../../App.css"
import { useState } from "react"
import plus from "./plus.png"
import "./MainPage.css"

export const MainPage = () => {
    const [showModal,setShowModal] = useState(false);
    return     <div className='main-wrapper'>
    <img src={img1} height='100%' width="604px"/>
    <RightSide />
    </div>
}