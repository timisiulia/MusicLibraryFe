import axios from "axios"
import { URL_APP } from "./util"

export class LibraryService {
    public static async getLibrary() {
        const url = `${URL_APP}/api/libraries`
        const result = await axios.get(url)
        return result.data
    }
}