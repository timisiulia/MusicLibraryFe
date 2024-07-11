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
}

export const ArtistCards = (props: ArtistCardsProps) => {
    const [showModal,setShowModal] = useState(false);
    const addArtist = async (data:any) => {
        const artist:Artist = {
            name: data['artist'],
            albums: []
        }
        await ArtistService.addArtist(artist)
    }
    return (<div className="artists-wrapper">
        {
          props.artists.length > 0 &&  props.artists.map(a => {
                return <ArtistCard id={a.id?.toString() as string} albumsCount={a.albums.length} name={a.name} key={a.name}/>
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
        onSave={async (data) => {await addArtist(data); setShowModal(false)}}/>
    </div>)
}