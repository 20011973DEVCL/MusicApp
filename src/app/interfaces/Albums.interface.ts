export interface Albums {
  statusCode:    number;
  successful:    boolean;
  errorMessages: null;
  result:        AlbumsResult[];
}

export interface AlbumsResult {
  idSinger:          number;
  singer:            string;
  fechaInicioSinger: null;
  idAlbum:           number;
  album:             string;
  añoAlbum:          number;
  notasAlbum:        string;
  idPais:            string;
  pais:              string;
  idGenero:          number;
  genero:            string;
}
