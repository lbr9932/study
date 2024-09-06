import { Suspense } from "react";
import "../../styles/pages/movie.scss";

import MoviePage from "@/components/MoviePage";

export default function Page() {
  return (
    <article className="movie">
      <div className="wrap">
        <Suspense>
          <MoviePage />
        </Suspense>
      </div>
    </article>
  );
}
