import { useEffect, useState } from "react";
import { AlbumComponent } from "./Album";
import "./AlbumPage.css"
import plus from "./plus.png"
import { Modal } from "../modal/Modal";
import { Album } from "../../models/Models";
import { ArtistService } from "../../services/ArtistService";
import { AlbumService } from "../../services/AlbumService";
import bin from "../../images/bin.png"
import { DeleteModal } from "../modal/DeleteModal";


export const AlbumPage = () => {
    const artistName = decodeURIComponent(window.location.href.split("/")[window.location.href.split("/").length-1])
    const [albums,setAlbums] = useState<Album[]>([])
    useEffect(() => {
        ArtistService.getArtistByName(artistName).then((data) => {
            setAlbums(data.albums)
        })
    },[])
    const [showModal,setShowModal] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    const addAlbum = async (data:any) => {
        const album: Album = {
            title: data['album'],
            description: data['description'],
            songs: []
        }
        await AlbumService.addAlbum(album, artistName)
    }
    return (<div className="albums-page">
    <h1 className="header-albums">Albums {artistName}</h1>
    <div className="albums">
        {albums.map(album => {
            return <AlbumComponent key={album.id} artistName={artistName} album={album} />
        })}
      <div className="add-album">
        <span className="add-album-span">Add Album</span>
        <img onClick={()=> setShowModal(true)} className="add-album-btn" width="25px" height="25px" src={plus} />
     </div>
    </div>
    <Modal
    onClose={()=>setShowModal(false)}
    open={showModal}
    onSave={async (data:any) => {await addAlbum(data); setShowModal(false)}}
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