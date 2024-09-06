"use client";
import "../styles/pages/home.scss";
import SearchForm from "@/components/SearchForm";
import InfinityMoveList from "@/components/InfinityMoveList";

export default function Home() {
  return (
    <>
      <div className="wrap">
        <InfinityMoveList />
        <SearchForm />
      </div>
    </>
  );
}
