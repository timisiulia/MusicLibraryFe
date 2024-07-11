import axios from "axios";
import { URL_APP } from "./util";
import { Artist } from "../models/Models";

export class ArtistService {
    public static async getArtists() {
    const url = `${URL_APP}/api/artists`
    const result = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return result.data
    }

    public static async getArtistByName(name:string)
    {
        const url = `${URL_APP}/api/artists/${name}`
        const result = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return result.data
    }

    public static async addArtist(artist: Artist)
    {
        const url = `${URL_APP}/api/artists`
        const result = await axios.post(url, artist)
        return result.data
    }

    public static async deleteArtist(name: string)
    {
        const url = `${URL_APP}/api/artists/${name}`
        const result = await axios.delete(url)
        return result.data
    }
}