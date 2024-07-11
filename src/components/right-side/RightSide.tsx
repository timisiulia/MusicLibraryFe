import { data } from "../../data"
import { ArtistCards } from "../artist-card/ArtistCards"
import { PageTitle } from "../page-title/PageTitle"
import "./RightSide.css"
export const RightSide = () => {
    return (<div className="right-side-wrapper">
        <PageTitle />
        <ArtistCards artists={data}/>
    </div>)
}