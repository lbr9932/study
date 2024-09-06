import { getPopular } from "@/lib/tmdbApi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PictureWrap } from "./Picture";

export default function InfinityMoveList({}) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  async function fetchMovies() {
    try {
      const data = await getPopular();

      setMovies(data.results);
    } catch (error) {
      setMovies([]);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      {movies.length > 0 && (
        <div className="infinity">
          <div className="infinity__pad">
            {movies.map((movie) => (
              <Link href={`/movie/${movie.id}`} key={movie.id} className="item">
                <PictureWrap
                  className="media-box"
                  immediate={true}
                  isImage={!!movie.poster_path}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
