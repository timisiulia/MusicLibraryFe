import { useState } from "react";
import { Album } from "../../models/Models"
import "./Album.css"
import plus from "./plus.png"
import { SongComponent } from "./Song";
import { Modal } from "../modal/Modal";

export interface AlbumProps {
    artistName: string;
    album: Album;
}
export const AlbumComponent = (props: AlbumProps) => {
    const [showDescription,setShowDescription] = useState(false);
    const [showModal, setShowModal] = useState(false);
    return (
    <div className="album">
    <div onClick={() => setShowDescription(!showDescription)} className="album-wrapper">
       <span className="album-title"> {props.album.title} </span>
       <div className="icon-plus">
       <img src={plus} width="25px" height="25px"/>
       </div>
    </div>
    {
        showDescription ? 
        <div className="album-body">
        {props.album.description}
        <div className="songs-wrapper">
        {
            props.album.songs.map(s=> {
                return <SongComponent song={s}/>
            })
        }
        </div>
        <div className="add-song">
        <span className="add-song-span">Add Song</span>
        <img onClick={() => setShowModal(true)} className="add-song-btn" width="25px" height="25px" src={plus} />
        </div>
        </div> : null
       }
       <Modal
       open={showModal}   
       fields={[
        {
            fieldName: 'Song Title',
            fieldKey: 'songTitle',
            disabled: false
        },
        {
            fieldName: 'Song Length',
            fieldKey: 'songLength',
            disabled: false
        },
        {
            fieldName: 'Artist',
            fieldKey: 'artist',
            disabled: true,
            placeholder: props.artistName
        },
        {
            fieldName: 'Album',
            fieldKey: 'album',
            disabled: true,
            placeholder: props.album.title
        }
       ]}
       onClose={() => setShowModal(false)} 
       onSave={() => {console.log('ok')}}/>
    </div>
    )
}