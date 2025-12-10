export interface RickListResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: RickSimple[];
}

export interface RickSimple {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}
