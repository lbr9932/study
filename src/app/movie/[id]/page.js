import "../../../styles/pages/movie.scss";

import MovieDetailsPage from "@/components/MovieDetailsPage";
import { Loading } from "@/components/Loading";
import { Suspense } from "react";

export default function MovieDetails({ params }) {
  return (
    <>
      <Suspense fallback={<Loading>Loading...</Loading>}>
        <MovieDetailsPage id={params.id} />
      </Suspense>
    </>
  );
}
