import { useState } from "react";
import { data } from "../../data"
import { AlbumComponent } from "./Album";
import "./AlbumPage.css"
import plus from "./plus.png"
import { Modal } from "../modal/Modal";

export const AlbumPage = () => {
    const artistName = decodeURIComponent(window.location.href.split("/")[window.location.href.split("/").length-1])
    const [showModal,setShowModal] = useState(false)
    const albums = data.filter(x=> x.name === artistName)[0].albums;
    return (<div className="albums-page">
    <h1 className="header-albums">Albums {artistName}</h1>
    <div className="albums">
        {albums.map(album => {
            return <AlbumComponent artistName={artistName} album={album} />
        })}
      <div className="add-album">
        <span className="add-album-span">Add Album</span>
        <img onClick={()=> setShowModal(true)} className="add-album-btn" width="25px" height="25px" src={plus} />
        </div>
    </div>
    <Modal
    onClose={()=>setShowModal(false)}
    open={showModal}
    onSave={() => console.log('ok')}
    fields={[{
        fieldKey:'artist',
        fieldName: 'Artist',
        disabled:true,
        placeholder:artistName
    },
    {
        fieldKey: 'album',
        fieldName: 'Album',
        disabled: false
    },
    {
        fieldKey: 'description',
        fieldName: 'Description',
        disabled: false
    }
    ]}
    />
    </div>)
}