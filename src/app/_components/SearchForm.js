"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/app/components/Button";
import "@/styles/components/search-form.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchForm({ value = "" }) {
  const router = useRouter();
  const [query, setQuery] = useState(value);

  async function handleSearch(event) {
    event.preventDefault();
    if (query) {
      router.push(`/movie?search=${encodeURIComponent(query)}`);
    }
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="search-form">
        <input
          type="text"
          className="search-form__input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie"
        />
        <Button className="search-form__btn" type="submit">
          <FontAwesomeIcon
            className="search-form__icon"
            icon={faMagnifyingGlass}
          />
        </Button>
      </div>
    </form>
  );
}
