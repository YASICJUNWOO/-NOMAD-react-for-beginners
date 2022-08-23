import {useState, useEffect} from 'react';
import Movie from '../components/Movie';

function Home(){
    const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=8bd4b1a41eb6db91aa8b8c0f3c7c036e`);
    const json = await response.json();
    setMovies(json.results);
    setLoading(false);
  };
  
  useEffect(()=>{
    getMovies()
  },[]);

  return (
    <div>
      {
      loading ? 
      (<h1>Loading...</h1>) 
      : <div>
        {movies.map((movie) => 
        (<Movie
            key = {movie.id}
            id = {movie.id}
            media_type = {movie.media_type}
            title = {movie.title}
            name = {movie.name}
            overview = {movie.overview}
            poster_path = {movie.poster_path}/>)
            )
        }
      </div>
      }
    </div>
  );
}

export default Home;