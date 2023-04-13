export interface Heroe { 
    id?:               string; //opcional porque al crear puede que no tengamos un id
    superhero:        string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_img?:          string; //ruta de la imagen
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}
