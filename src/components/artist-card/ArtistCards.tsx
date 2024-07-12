import { useState } from "react"
import { Artist } from "../../models/Models"
import { ArtistCard } from "./ArtistCard"
import "./ArtistCard.css"
import plus from "./plus.png"
import { Modal } from "../modal/Modal"
import { ArtistService } from "../../services/ArtistService"

export interface ArtistCardsProps
{
    artists: Artist[]
    deleteArtist:(name:string) => void;
    addArtist:(data:any) => void;
}

export const ArtistCards = (props: ArtistCardsProps) => {
    const [showModal,setShowModal] = useState(false);
    
    return (<div className="artists-wrapper">
        {
          props.artists.length > 0 &&  props.artists.map(a => {
                return <ArtistCard deleteArtist={(name:string) => props.deleteArtist(name)} id={a.id?.toString() as string} albumsCount={a.albums.length} name={a.name} key={a.name}/>
            })
        }
        <div className="add-artist">
        <span className="add-artist-span">Add Artist</span>
        <img onClick={()=> setShowModal(true)} className="add-artist-btn" width="25px" height="25px" src={plus} />
        </div>
        <Modal 
        open={showModal}
        fields={[{
            fieldKey: 'artist',
            fieldName:'Artist',
            disabled:false
        }]}
        onClose={()=> setShowModal(false)} 
        onSave={async (data) => {props.addArtist(data); setShowModal(false)}}/>
    </div>)
}