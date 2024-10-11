import "@/styles/pages/movie.scss";

export const metadata = {
  title: "Movie Time ",
  description: "Movie Time",
};

export default function Layout({ children }) {
  return <article className="movie">{children}</article>;
}
