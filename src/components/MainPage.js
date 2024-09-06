"use client";

import SearchForm from "./SearchForm";
import InfinityMoveList from "./InfinityMoveList";

export default function MainPage() {
  return (
    <>
      <div className="wrap">
        <InfinityMoveList />
        <SearchForm />
      </div>
    </>
  );
}
