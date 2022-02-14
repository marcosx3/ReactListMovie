import movies from '../movies.json'
import { MovieCard } from './movieCard';
import  '../components/movieGrid.css';
export function MoviesGrid(){
   
    return (
        <ul className='movieGrid'>
         {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie}/>
            
         ))}
          </ul>
    );
}