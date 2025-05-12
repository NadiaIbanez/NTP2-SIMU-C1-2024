
import Movie from "./Movie";
import "./movieCard.css"

export default function MovieList(props){


    return(
        <ul className="grid">
            {props.Movies.map((movie) =>{
                return(
                    <Movie
                        key = {movie._id}
                        poster = {movie.poster}
                        title = {movie.title}
                        fullplot = {movie.fullplot}
                        ID = {movie._id}
                    />
                ); 
            })}
        </ul>
    );

}
