export interface DragonDetailResponse {
  id: number;
  name: string;
  ki: number;
  maxKi: number;
  race: string;
  gender: string;
  affiliation: string;
  description: string;
  image: string;
  transformations: DragonTransformation[];
}

export interface DragonTransformation {
  id: number;
  name: string;
  image: string;
}
