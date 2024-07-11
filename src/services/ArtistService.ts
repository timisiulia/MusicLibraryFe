import axios from "axios";
import { URL_APP } from "./util";

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
}