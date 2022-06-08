import { environment } from '../../environments/environment';
import {ParamsEnum, QueryEnum} from "../enums";

const { API, KEY, IMG } = environment;

export const urls = {
  movies: `${API}${ParamsEnum.DISCOVER}${ParamsEnum.MOVIE}${QueryEnum.API_KEY}${KEY}${QueryEnum.SORT_BY}null`,
  moviesPopular: `${API}${ParamsEnum.DISCOVER}${ParamsEnum.MOVIE}${QueryEnum.API_KEY}${KEY}`,
  movie: `${API}${ParamsEnum.MOVIE}`,
  movieLatest: `${API}${ParamsEnum.MOVIE}${ParamsEnum.LATEST}${QueryEnum.API_KEY}${KEY}`,
  genresMovie: `${API}${ParamsEnum.GENRE}${ParamsEnum.MOVIE}${ParamsEnum.LIST}${KEY}`,
  upcomingMovie: `${API}${ParamsEnum.MOVIE}${ParamsEnum.UPCOMING}${QueryEnum.API_KEY}${KEY}`,
  trendingAllDay: `${API}${ParamsEnum.TRENDING}${ParamsEnum.ALL}${ParamsEnum.DAY}${QueryEnum.API_KEY}${KEY}`,
  trendingAllWeek: `${API}${ParamsEnum.TRENDING}${ParamsEnum.ALL}${ParamsEnum.WEEK}${QueryEnum.API_KEY}${KEY}`,
  trendingMovieDay: `${API}${ParamsEnum.TRENDING}${ParamsEnum.MOVIE}${ParamsEnum.DAY}${QueryEnum.API_KEY}${KEY}`,
  trendingMovieWeek: `${API}${ParamsEnum.TRENDING}${ParamsEnum.MOVIE}${ParamsEnum.WEEK}${QueryEnum.API_KEY}${KEY}`,
  trendingTvDay: `${API}${ParamsEnum.TRENDING}${ParamsEnum.TV}${ParamsEnum.DAY}${QueryEnum.API_KEY}${KEY}`,
  trendingTvWeek: `${API}${ParamsEnum.TRENDING}${ParamsEnum.TV}${ParamsEnum.WEEK}${QueryEnum.API_KEY}${KEY}`,
  person: `${API}${ParamsEnum.PERSON}`,
  tvAll: `${API}${ParamsEnum.DISCOVER}${ParamsEnum.TV}${QueryEnum.API_KEY}${KEY}${QueryEnum.SORT_BY}null`,
  tvAllPopular: `${API}${ParamsEnum.DISCOVER}${ParamsEnum.TV}${QueryEnum.API_KEY}${KEY}`,
  tvOne: `${API}${ParamsEnum.TV}`,
  genresTV: `${API}${ParamsEnum.GENRE}${ParamsEnum.TV}${ParamsEnum.LIST}${KEY}`,
  upcomingTV: `${API}${ParamsEnum.TV}${ParamsEnum.UPCOMING}${QueryEnum.API_KEY}${KEY}`,
  tvLatest: `${API}${ParamsEnum.TV}${ParamsEnum.LATEST}${QueryEnum.API_KEY}${KEY}`,
  movieWithGenres: `${API}${ParamsEnum.DISCOVER}${ParamsEnum.MOVIE}${QueryEnum.API_KEY}${KEY}${QueryEnum.WITH_GENRES}`,
  imgW500: `${IMG}/${ParamsEnum.W500}`,
  imgOriginal: `${IMG}/${ParamsEnum.ORIGINAL}`,
  animations: `${API}${ParamsEnum.DISCOVER}${ParamsEnum.MOVIE}${QueryEnum.API_KEY}${KEY}${QueryEnum.SORT_BY}${QueryEnum.WITH_GENRES}16`
}
