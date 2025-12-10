export interface DragonListResponse {
  items: DragonSimple[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface DragonSimple {
  id: number;
  name: string;
  ki: number;
  maxKi: number;
  race: string;
  gender: string;
  affiliation: string;
  image: string;
}
