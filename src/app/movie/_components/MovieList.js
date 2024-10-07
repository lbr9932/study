import Link from "next/link";
import { PictureWrap } from "@/app/components/Picture";

export default function MovieList({ movies }) {
  return (
    <ul className="movie__list">
      {movies.map((movie) => (
        <li key={movie.id} className="movie__item item">
          <Link href={`/movie/${movie.id}`}>
            <PictureWrap
              className="media-box"
              isImage={!!movie.poster_path}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 className="item__h">{movie.title}</h3>
            <p className="item__desc">{movie.overview}</p>
            <p className="item__date">
              <strong>Release Date : </strong> {movie.release_date}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
