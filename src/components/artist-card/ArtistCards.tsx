import { useState } from "react"
import { Artist } from "../../models/Models"
import { ArtistCard } from "./ArtistCard"
import "./ArtistCard.css"
import plus from "./plus.png"
import { Modal } from "../modal/Modal"

export interface ArtistCardsProps
{
    artists: Artist[]
}

export const ArtistCards = (props: ArtistCardsProps) => {
    const [showModal,setShowModal] = useState(false);
    return (<div className="artists-wrapper">
        {
            props.artists.map(a => {
                return <ArtistCard albumsCount={a.albums.length} name={a.name} key={a.name}/>
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
        onSave={() => console.log('ok')}/>
    </div>)
}