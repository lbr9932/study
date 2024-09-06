import "../../styles/pages/movie.scss";

import MoviePage from "@/components/MoviePage";

export default function Page() {
  return (
    <article className="movie">
      <div className="wrap">
        <MoviePage />
      </div>
    </article>
  );
}
