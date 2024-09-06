"use client"; // 클라이언트 측 코드임을 명시

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { searchMovies } from "@/lib/tmdbApi";
import { Loading } from "@/components/Loading";
import { PictureWrap } from "@/components/Picture";
import NoData from "@/components/Empty";
import Link from "next/link";
import { Button, ButtonGroup } from "@/components/Button";
import SearchForm from "./SearchForm";

export default function MoviePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // 페이지 상태 추가
  const [hasMore, setHasMore] = useState(true); // 더 불러올 데이터가 있는지 확인

  const goBack = () => {
    router.back(); // 이전 페이지로 돌아갑니다.
  };

  async function fetchMovies(query, page = 1) {
    setLoading(true);

    try {
      const data = await searchMovies(query, page);

      if (page === 1) {
        setMovies(data.results); // 첫 페이지일 때 기존 데이터를 대체
      } else {
        setMovies((prevMovies) => [...prevMovies, ...data.results]); // 다음 페이지일 때 데이터 추가
      }

      setHasMore(data.page < data.total_pages); // 현재 페이지가 총 페이지보다 작은지 확인
      setError(null);
    } catch (error) {
      setMovies([]);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (search) {
      fetchMovies(search, page); // 페이지 번호 포함
    }
  }, [search, page]); // 페이지나 검색 매개변수가 변경될 때마다 실행

  if (loading && search && page === 1) return <Loading>Loading...</Loading>;
  if (error && search) return <p>Error: {error}</p>;

  return (
    <>
      <SearchForm value={search} />

      {movies.length > 0 ? (
        <>
          {loading && <Loading>Loading...</Loading>}
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
          {hasMore && (
            <ButtonGroup align="center">
              <Button onClick={() => setPage((prevPage) => prevPage + 1)}>
                Read More
              </Button>
            </ButtonGroup>
          )}
        </>
      ) : (
        <>
          <NoData>No movies found.</NoData>
          <ButtonGroup align="center">
            <Button onClick={goBack}>Back</Button>
          </ButtonGroup>
        </>
      )}
    </>
  );
}
