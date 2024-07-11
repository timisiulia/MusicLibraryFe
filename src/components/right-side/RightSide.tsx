import { Artist } from "../../models/Models";
import { ArtistCards } from "../artist-card/ArtistCards"
import { PageTitle } from "../page-title/PageTitle"
import "./RightSide.css"

export interface RightSideProps {
    artists:Artist[]
}
export const RightSide = (props: RightSideProps) => {
    return (<div className="right-side-wrapper">
        <PageTitle />
        <ArtistCards artists={props.artists}/>
    </div>)
}