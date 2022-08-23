import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({id,media_type, title, name, overview, poster_path}){
    return (
          (<div>
            <h2 style={{color:"tomato",}}><Link to={`/detail/${id}`}>{
              media_type === "movie" ? title : name}</Link></h2>
            <p>{overview}</p>
            <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`}></img>
            </div>)
           
    );
}

Movie.propTypes ={
  id:PropTypes.number.isRequired,
    media_type:PropTypes.string.isRequired,
    title:PropTypes.string,
    name:PropTypes.string,
    overview:PropTypes.string.isRequired,
    poster_path:PropTypes.string.isRequired,

}
export default Movie;