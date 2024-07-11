import axios from "axios"
import { URL_APP } from "./util"

export class SearchService {
    public static async search(query: string) {
        const url = `${URL_APP}/api/search?query=${query}`
        const result = await axios.get(url)
        return result.data
    }
}