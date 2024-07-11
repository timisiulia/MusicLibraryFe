import { RightSide } from "../right-side/RightSide"
import img1 from "../../images/image1.jpg"
import "../../App.css"
import { useEffect, useState } from "react"
import plus from "./plus.png"
import "./MainPage.css"
import { ArtistService } from "../../services/ArtistService"
import { Artist } from "../../models/Models"


export const MainPage = () => {
    const [artists,setArtists] = useState<Artist[]>([]);

    useEffect(()=> {
        ArtistService.getArtists().then((data) => {
            setArtists(data)
        })
    },[])
    return (
    <div className='main-wrapper'>
     
             <img src={img1} height='100%' width="800px"/>
             <RightSide artists={artists} />
           
        
    </div>
    
    )
}