import { Song } from "../../models/Models"
import "./Song.css"
import bin from"../../images/bin.png"
import { useState } from "react"
import { DeleteModal } from "../modal/DeleteModal"
import { SongService } from "../../services/SongService"
export interface SongProps {
    albumName:string
    song: Song
    deleteSong:(songName:string) => void;
}
export const SongComponent = (props:SongProps) => {
    const [showDelete,setShowDelete] = useState(false)
    return <div className="song">
    <span className="song-title">{props.song.title}</span>
    <span className="song-length">{props.song.length}</span>
    <img onClick={() => setShowDelete(true)} className="delete-song-btn" width="25px" height="25px" src={bin} />
    <DeleteModal
        open={showDelete}
        onClose={() => setShowDelete(false)}
        confirmDelete={() => {props.deleteSong(props.song.title); setShowDelete(false)}}
        itemName={props.song.title}
        />
    </div>
}