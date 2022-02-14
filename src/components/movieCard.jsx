import  '../components/movieCard.css'

export function MovieCard({movie}){
    const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return <li className="movieCard">
        <img  className='movieImage' src={imageURL} alt={movie.title}/>
       <div>
       {movie.title}
       </div>
        </li>
}