import React from "react";
import { useParams } from "react-router-dom";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// Components
import Grid from "./Grid";
import Spinner from "./Spinner";

// Hook
import { useMovieFetsh } from "../hooks/useMovieFetch";

// Image
import NoImage from "../images/no_image.jpg";
import BreadCrumb from "./BreadCrumb";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetsh(movieId);
  console.log(movie);
  if (loading) return <Spinner />;
  if (error) return <div>Somthing went wrong...</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <div>Movie</div>
    </>
  );
};

export default Movie;
