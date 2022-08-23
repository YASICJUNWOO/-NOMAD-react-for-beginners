import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail(){
    const {id} = useParams();
    const [movie,setMovie] = useState([]);
    const getMovie = async()=>{
        const json = await(
            await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8bd4b1a41eb6db91aa8b8c0f3c7c036e&language=en-US`)
        ).json();
        setMovie(json);
    };
    useEffect(()=>{
        getMovie();
    },[]);

    return (
    <h3>{movie.overview}</h3>
    );
}

export default Detail;