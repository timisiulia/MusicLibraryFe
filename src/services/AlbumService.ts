import axios from "axios";
import { Album } from "../models/Models";
import { URL_APP } from "./util";

export class AlbumService {
    public static async addAlbum(album: Album, artistName: string)
    {
        const url = `${URL_APP}/api/albums/${artistName}`;
        const result = await axios.post(url, album);
        return result;
    }
   
}