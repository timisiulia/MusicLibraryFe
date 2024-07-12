import { Artist } from "../../models/Models";
import { ArtistCards } from "../artist-card/ArtistCards"
import { PageTitle } from "../page-title/PageTitle"
import "./RightSide.css"
import { SearchBar } from "./Searchbar";
import { v4 as uuidv4 } from 'uuid';
export interface RightSideProps {
    artists:Artist[]
    deleteArtist:(name:string) => void;
    addArtist:(name:string) => void;
}
export const RightSide = (props: RightSideProps) => {
    return (<div className="right-side-wrapper">
        <PageTitle />
        <SearchBar/>
        <ArtistCards addArtist={props.addArtist} key={uuidv4()} deleteArtist={props.deleteArtist} artists={props.artists}/>
    </div>)
}