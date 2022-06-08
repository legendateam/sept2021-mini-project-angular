import {ICommonFields} from "./common-fields.interface";

export interface IMovie extends ICommonFields {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}
