"use client";
import {useState, useEffect,use} from "react";
import "../movieCard.css";


export default function peliDetails({params}){
    const {id} = params;
    const [movie, setMovie] = useState([]);

    useEffect(() =>{
        fetch("https://mflixbackend.azurewebsites.net/api/movies?pageSize=[100]&page=[1]")
        .then((response) => response.json())
        .then((data) => {
            setMovie(data.find(m => m._id == id))
        })
        .catch(error => console.log(error));
    },[]);

    return(
        < >
        <div className="details">
            <div  >
                <img src={movie.poster} alt={movie.title} className="details-img"/>
            </div>

            <div className="details-content">
                <h1>{movie.title}</h1>
                <p>{movie.fullplot}</p>
            </div>

            <br></br>

            <div className="section">
                <h1>Awards:</h1>
                <p>Wins: {movie.awards?.wins}</p>
                <p>Nominations: {movie.awards?.nominations}</p>
                <p>Text: {movie.awards?.text}</p>

                <br></br>

                <h1>Tomatoes:</h1>
                <h2>Viewer:</h2>
                <p>{movie.tomatoes?.viewer?.rating}</p>
                <p>{movie.tomatoes?.viewer?.numReviews}</p>
                <p>{movie.tomatoes?.viewer?.meter}</p>
                
                <br></br>
                <h2>Critic:</h2>
                <p>{movie.tomatoes?.critic?.rating}</p>
                <p>{movie.tomatoes?.critic?.numReviews}</p>
                <p>{movie.tomatoes?.critic?.meter}</p>
                
            </div>
        </div>
        </>
    )
}