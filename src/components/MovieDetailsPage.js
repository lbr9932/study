"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { detailMovie, getCredits, getVideo } from "@/lib/tmdbApi";
import { Loading } from "./Loading";
import { Button, ButtonGroup } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Hero from "./Hero";
import CastList from "./CastList";

export default function MovieDetailsPage({ id }) {
  const router = useRouter();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [credits, setCredits] = useState([]); // 영화 목록 상태 추가
  const [directing, setDirecting] = useState("");
  const [videos, setVideos] = useState(null);

  const goBack = () => {
    router.back();
  };

  async function fetchMovieDetails(id) {
    setLoading(true);

    try {
      setMovie(await detailMovie(id));
      setCredits(await getCredits(id));
      setDirecting(
        credits?.cast?.filter((cast) => {
          return cast.known_for_department === "Directing";
        })[0]?.name
      );
      setVideos(await getVideo(id));
    } catch (err) {
      setMovie(null);
      setCredits(null);
      setDirecting(null);
      setVideos(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  console.log(videos?.results);

  useEffect(() => {
    if (id) {
      fetchMovieDetails(id);
    }
  }, [id]);

  if (loading) return <Loading>Loading...</Loading>;
  if (error)
    return (
      <div className="wrap">
        {" "}
        <p>Error: {error}</p>
      </div>
    );

  return (
    <>
      <article className="movie">
        <Hero
          ytVideo={videos?.results[0]?.key}
          isImage={
            movie.backdrop_path ? true : movie.poster_path ? true : false
          }
          src={`https://image.tmdb.org/t/p/w1280/${
            movie.backdrop_path ? movie.backdrop_path : movie.poster_path
          }`}
          title={movie.title}
        ></Hero>

        <div className="wrap">
          <div className="details">
            <div className="details__text">
              <ul className="details__list">
                {directing && (
                  <li>
                    <strong>Directing </strong> {directing}
                  </li>
                )}
                <li>
                  <strong>Average</strong> {movie.vote_average}
                </li>
                <li>
                  <strong>Count </strong> {movie.vote_count}
                </li>
                <li>
                  <strong>Date</strong> {movie.release_date}
                </li>
                <li>
                  <strong>Language </strong> {movie.original_language}
                </li>
              </ul>
              <p className="details__p">{movie.overview}</p>
              <p>{movie.tagline}</p>
            </div>
            <CastList cast={credits?.cast} title="Cart" />
          </div>

          <ButtonGroup align="center" className="pagination">
            <Button onClick={goBack}>Back</Button>
          </ButtonGroup>
        </div>
      </article>
    </>
  );
}
