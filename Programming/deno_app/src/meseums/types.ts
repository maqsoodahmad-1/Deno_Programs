export type Meseum = {
    id : string,
    name: string,
    description: string,
    location: {
        lat: string,
        lng: string

    }
}

export interface MeseumController {
    getAll: () => Promise<Meseum[]>;
}

export interface MuseumRepository {
    getAll: () => Promise<Meseum[]>
}