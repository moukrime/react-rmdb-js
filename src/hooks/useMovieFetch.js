import { useState, useEffect } from "react";
import API from "../API";

export const useMovieFetsh = (movieId) => {
  console.log(movieId);
  const [state, setState] = useState({});
  const [loading, setLoadind] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoadind(true);
        setError(false);
        console.log("---", movieId);
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        // Get directors only
        const directors = await credits.crew.filter(
          (member) => member.job === "Director"
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });

        setLoadind(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, [movieId]);

  return { state, loading, error };
};
