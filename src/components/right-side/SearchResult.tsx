import "./SearchResult.css"
export interface SearchResultProps {
    type:string;
    name:string;
}

export const SearchResult = (props: SearchResultProps) => {
    return <div className="result-wrapper">
        <span className="result-name">{props.name}</span>
        <span className="result-type">{props.type}</span>
    </div>
}