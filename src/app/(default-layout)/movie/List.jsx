"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { searchMovies } from "@/api/tmdbApi";
import { CLoading } from "@/app/_components/CLoading";
import NoData from "@/app/_components/Empty";
import MovieList from "@/app/(default-layout)/movie/[id]/MovieList";
import { Button, ButtonGroup } from "@/app/_components/Button";

export default function List({ search }) {
  const router = useRouter();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); // 페이지 상태 추가
  const [hasMore, setHasMore] = useState(true); // 더 불러올 데이터가 있는지 확인

  const goBack = () => {
    router.back(); // 이전 페이지로 돌아갑니다.
  };

  async function fetchMovies(page = 1) {
    setLoading(true);

    try {
      const data = await searchMovies(search, page);

      if (page === 1) {
        setMovies(data.results); // 첫 페이지일 때 기존 데이터를 대체
      } else {
        setMovies((prevMovies) => [...prevMovies, ...data.results]); // 다음 페이지일 때 데이터 추가
      }

      setHasMore(data.page < data.total_pages); // 현재 페이지가 총 페이지보다 작은지 확인
    } catch (error) {
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (page) {
      fetchMovies(page); // 페이지 번호 포함
    }
  }, [page]); // 페이지나 검색 매개변수가 변경될 때마다 실행

  return (
    <>
      {movies.length > 0 ? (
        <>
          {loading && <CLoading>Loading...</CLoading>}
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
    </>
  );
}
