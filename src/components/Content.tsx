import { Header } from "./Header";
import { MovieCard } from "./MovieCard"

import '../styles/content.scss';

interface ContentProps{
  title: string;
  movies:{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }[]
}

export function Content(props:ContentProps) {
  return(
    <div className="container">
        <Header title={props.title}/>

        <main>
          <div className="movies-list">
            {props.movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}