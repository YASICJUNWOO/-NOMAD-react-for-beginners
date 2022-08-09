import {useState, useEffect} from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=f2ac112a26588a2a83386a2b79a6bc25`);
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
      : (<div>
          {movies.map((movie) => (<div key={movie.id}>
            <h2 style={{color:"tomato",}}>{movie.title}</h2>
            <p>{movie.overview}</p>
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
            </div>))}
          </div>
        )
      }
    </div>
  );
}

export default App;
