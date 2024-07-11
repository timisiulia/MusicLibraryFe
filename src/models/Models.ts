export interface Song {
    id? : number;
    title: string;
    length: string;
}

export interface Album {
    id?:number;
    title: string;
    songs: Song[];
    description: string;
}


export interface Artist {
    id?:number;
    name: string;
    albums: Album[]
}

export interface Library {
    artists: Artist[]
}