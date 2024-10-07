"use client"; // 클라이언트 측 코드임을 명시

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { searchMovies } from "@/api/tmdbApi";
import { Loading } from "@/app/components/Loading";
import NoData from "@/app/components/Empty";
import SearchForm from "@/app/components/SearchForm";
import MovieList from "@/app/movie/_components/MovieList";
import { Button, ButtonGroup } from "@/app/components/Button";

export default function Page() {
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

    // 스크롤 위치 복원 (router.back() 후 실행)
    const scrollY = sessionStorage.getItem("scrollPosition");
    if (scrollY) {
      window.scrollTo(0, Number(scrollY));
    }
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

  useEffect(() => {
    setPage(1);
  }, [search]);

  if (error && search) return <p>Error: {error}</p>;

  return (
    <div className="wrap">
      <SearchForm value={search} />

      {movies.length > 0 ? (
        <>
          {loading && <Loading>Loading...</Loading>}
          <MovieList movies={movies} />
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
    </div>
  );
}
