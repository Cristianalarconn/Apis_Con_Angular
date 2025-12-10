export interface SimpsonListResponse {

  results: SimpsonSimple[];
}

export interface SimpsonSimple {
  id: number;
  name: string;
  portrait_path: string;
  description: string;
}
