import { useEffect, useState } from "react";
import { PictureWrap } from "@/app/_components/Picture";
import { Button } from "@/app/_components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function CastList({ cast = [], title }) {
  const [maxLen, setMaxLen] = useState(7);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMaxLen(cast.length - 1);
    } else {
      setMaxLen(7);
    }
  }, [isOpen, cast.length]);

  // 조건문으로 렌더링 제어
  if (cast.length === 0) return;

  function open() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className={`cast${isOpen ? " is-open" : ""}`}>
      {title && <h2 className="cast__h">Cast</h2>}
      <ul className="cast__list">
        {cast.slice(0, maxLen + 1).map((castItem) => (
          <li className="item" key={castItem.id}>
            <PictureWrap
              className="media-box"
              isImage={!!castItem.profile_path}
              src={`https://image.tmdb.org/t/p/w185/${castItem.profile_path}`}
              alt={castItem.name} // alt 속성 추가
            />
            <strong className="item__name">{castItem.name}</strong>
            <span className="item__desc">{castItem.known_for_department}</span>
          </li>
        ))}
      </ul>
      {cast.length > maxLen && (
        <Button onClick={open} className="btn btn--sm btn--ghost">
          {isOpen ? "Hide" : "Show More"}
          <FontAwesomeIcon size={20} icon={faArrowDown} />
        </Button>
      )}
    </div>
  );
}
