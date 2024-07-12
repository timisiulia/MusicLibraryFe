import rammstein from "../../images/rammstein.jpg"
import radiohead from "../../images/radiohead.jpg"
import portishead from "../../images/portishead.jpg"
import taylor from "../../images/taylorswift.jpg"
import notavailable from "./notavailable.jpg"
import "./ArtistCard.css"
import { useState } from "react"
import { DeleteModal } from "../modal/DeleteModal"
import { ArtistService } from "../../services/ArtistService"
import bin from "../../images/bin.png"

export interface ArtistCardProps {
    id:string;
    name: string;
    albumsCount: number;
    deleteArtist:(name:string) => void;
}

export const ArtistCard = (props: ArtistCardProps) => {
    const [showDelete,setShowDelete] = useState(false)
    function getImage()
    {
        switch(props.name)
        {
            case 'Rammstein':
                return rammstein
            case 'Radiohead':
                return radiohead
            case 'Taylor Swift':
                return taylor
            case 'Portishead':
                return portishead
            default:
                return notavailable
        }
    }

    return (<div className="artist-card">
    <a href={`/albums/${props.name}`}><img className="artist-image" src={getImage()}/></a>
    <div className="artist-info-wrapper">
    <div style={{width:'100%', display:'flex'}}>
    <h3 className="artist-name">{props.name}</h3>
    <div className="delete-artist">
        <span className="delete-artist-span">Delete Artist</span>
        <img onClick={()=> setShowDelete(true)} className="delete-artist-btn" width="25px" height="25px" src={bin} />
    </div>
    </div>
    <h4 className="album-count">ALBUMS: {props.albumsCount}</h4>
    
        <DeleteModal
        open={showDelete}
        onClose={() => setShowDelete(false)}
        confirmDelete={async () => { props.deleteArtist(props.name);setShowDelete(false)}}
        itemName={props.name}
        />
    </div>
    
    </div>)
}