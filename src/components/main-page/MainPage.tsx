import { RightSide } from "../right-side/RightSide"
import img1 from "../../images/image1.jpg"
import "../../App.css"
import { useEffect, useState } from "react"
import plus from "./plus.png"
import "./MainPage.css"
import { ArtistService } from "../../services/ArtistService"
import { Artist } from "../../models/Models"
import img2 from "./img2.jpg"
import {v4 as uuidv4} from 'uuid'

export interface MainPageProps {
    deleteArtist:(name:string) => void;
}
export const MainPage = () => {
    const [artists,setArtists] = useState<Artist[]>([]);

    useEffect(()=> {
        ArtistService.getArtists().then((data) => {
            setArtists(data)
        })
    },[])

    const deleteArtist = async (name:string) => {
        const filtered = artists.filter(a => a.name !== name)
        setArtists(filtered)
        await ArtistService.deleteArtist(name)
    }

    const addArtist = async (data:any) => {
        const artist:Artist = {
            name: data['artist'],
            albums: []
        }
        const added = [...artists,artist]
        setArtists(added)
        await ArtistService.addArtist(artist)
    }

    return (
    <div className='main-wrapper'>
         <img src={img1} height='100%' width="800px" style={{position:'fixed'}}/>
        <RightSide addArtist={async (data) => await addArtist(data)} key={uuidv4()} deleteArtist={(name) => {
            deleteArtist(name)
        }} artists={artists} />            
    </div>
    
    )
}