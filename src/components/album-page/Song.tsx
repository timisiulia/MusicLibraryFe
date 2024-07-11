import { Song } from "../../models/Models"
import "./Song.css"

export interface SongProps {
    song: Song
}
export const SongComponent = (props:SongProps) => {
    return <div className="song">
    <span className="song-title">{props.song.title}</span>
    <span className="song-length">{props.song.length}</span>
    </div>
}