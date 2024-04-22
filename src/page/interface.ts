export interface MarvelResponse {
    data: MarvelResult;
    status: string;
    code: number;
    attributionText: string;
}

export interface MarvelResult {
    count: number
    limit: number
    offset: number
    results: MarvelItem[]
}

export interface MarvelItem {
    id: number
    thumbnail: Thumbnail
    title: string
    dates: Date[]
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface Date {
    type: string
    date: string
}