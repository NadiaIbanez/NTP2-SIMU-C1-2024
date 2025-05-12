"use client";
import {useState, useEffect} from 'react';
import MovieList from "./MovieList";

export default function MoviePage(){

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState([1]);
    const pageSize = 100;


    useEffect(() =>{
        fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=${pageSize}&page=${page}`)
        .then((response) => response.json())
        .then((data) => setMovies(data))
        .catch(error => console.log(error));

    },[]);

    return(
        <>
           <MovieList Movies = {movies}/>

        </>
    )
}