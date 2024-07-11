import { useState } from "react";
import "./Searchbar.css";
import { SearchService } from "../../services/SearchService";
import { SearchResult } from "./SearchResult";

export const SearchBar = () => {
    const [value, setValue] = useState("");
    const [results,setResults] = useState([]);
    const handleSearch = async () => {
        const results = await SearchService.search(value);
        setResults(results)
    }
    return (
    <div className="search-wrapper">
    <input className="search-bar" onChange={async (event) => { setValue(event.target.value); await handleSearch();}} placeholder="Search for artists, albums, songs..."/>
    {
        value && results.length > 0 &&  
        <div className="search-results">
            {
                results.map((result:any) => {
                    return <SearchResult type={result.dataType} name={result.value}/>
                })
            }
        </div>
    }
   
    </div>)
}