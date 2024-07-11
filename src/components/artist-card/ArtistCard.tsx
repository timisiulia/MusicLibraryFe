import rammstein from "../../images/rammstein.jpg"
import radiohead from "../../images/radiohead.jpg"
import portishead from "../../images/portishead.jpg"
import taylor from "../../images/taylorswift.jpg"
import notavailable from "./notavailable.jpg"
import "./ArtistCard.css"


export interface ArtistCardProps {
    name: string;
    albumsCount: number;
}

export const ArtistCard = (props: ArtistCardProps) => {
    
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
    <h3 className="artist-name">{props.name}</h3>
    <h4 className="album-count">ALBUMS: {props.albumsCount}</h4>
    </div>
    
    </div>)
}