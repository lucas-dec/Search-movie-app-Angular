interface Movie {
    Title: string,
    Year: number,
    imdbID: string,
    Type: string,
    Poster: string
};

export interface Movies {
    Search: Movie[],
    totalResults: number,
    Response: boolean,
    Error?: string
}
