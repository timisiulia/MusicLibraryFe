import { useState } from "react";
import { Album, Song } from "../../models/Models"
import "./Album.css"
import plus from "./plus.png"
import { SongComponent } from "./Song";
import { Modal } from "../modal/Modal";
import { title } from "process";
import { SongService } from "../../services/SongService";
import bin from "../../images/bin.png"
import { DeleteModal } from "../modal/DeleteModal";
import { AlbumService } from "../../services/AlbumService";

export interface AlbumProps {
    artistName: string;
    album: Album;
    deleteAlbum: (albumName: string) => void;
}
export const AlbumComponent = (props: AlbumProps) => {
    const [showDescription,setShowDescription] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showDelete,setShowDelete] = useState(false)
    const [songs,setSongs] = useState(props.album.songs)
    const addSong = async (data:any, albumName: string) => {
        const song: Song = {
            title: data['songTitle'],
            length: data['songLength'],
        }
        const added = [...songs,song]
        setSongs(added)
       await SongService.addSong(song, albumName)
    }

    const deleteSong = async (title:string) => {
        const deleted = songs.filter(s => s.title !== title)
        setSongs(deleted)
        await SongService.deleteSong(title, props.album.title)
    }

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
            songs.map(s=> {
                return <SongComponent deleteSong={deleteSong} albumName={props.album.title} key={s.id} song={s}/>
            })
        }
        </div>
        {
            songs.length === 0  &&  <div className="add-song">
            <span className="add-song-span">Add Song</span>
            <img onClick={() => setShowModal(true)} className="add-song-btn" width="25px" height="25px" src={plus} />
            </div>
        }
       
        </div> : null
       }
        <div className="delete-album">
        <span className="delete-album-span">Delete Album</span>
        <img onClick={()=> setShowDelete(true)} className="delete-album-btn" width="25px" height="25px" src={bin} />
        </div>
        <DeleteModal
        open={showDelete}
        onClose={() => setShowDelete(false)}
        confirmDelete={(itemName:string) => {props.deleteAlbum(itemName);setShowDelete(false)}}
        itemName={props.album.title}
        />
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
       onSave={async (data:any) => {await addSong(data, props.album.title); setShowModal(false)}}/>
    </div>
    )
}