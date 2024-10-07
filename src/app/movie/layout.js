import { Suspense } from "react";
import { Loading } from "@/app/components/Loading";

import "@/styles/pages/movie.scss";

export const metadata = {
  title: "Movie Time ",
  description: "Movie Time",
};

export default function Layout({ children }) {
  return (
    <article className="movie">
      <Suspense fallback={<Loading>Loading...</Loading>}>{children}</Suspense>
    </article>
  );
}
