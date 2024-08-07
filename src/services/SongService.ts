import axios from "axios";
import { Song } from "../models/Models";
import { URL_APP } from "./util";

export class SongService {
    public static async addSong (song: Song, albumName: string)
    {
        const url = `${URL_APP}/api/songs/${albumName}`
        const result = await axios.post(url, song)
        return result.data;
    }

    public static async deleteSong(song: string, albumName: string)
    {
        const url = `${URL_APP}/api/songs/${song}/${albumName}`
        const result = await axios.delete(url)
        return result.data;
    }
}