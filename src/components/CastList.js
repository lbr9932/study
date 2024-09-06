import { useEffect, useState } from "react";
import { PictureWrap } from "./Picture";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function CastList({ cast, title }) {
  if (cast.length < 1) return;

  const [maxLen, setMaxLen] = useState(7);
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setMaxLen(isOpen ? cast.length - 1 : 7);
  }, [isOpen]);

  return (
    <>
      <div className={"cast" + (isOpen ? " is-open" : "")}>
        <h2 className="cast__h">{title ? "Cast" : ""}</h2>
        <ul className="cast__list">
          {cast.map((cast, index) => {
            if (index > maxLen && !isOpen) return;
            return (
              <li className="item" key={cast.id}>
                <PictureWrap
                  className="media-box"
                  isImage={!!cast.profile_path}
                  src={`https://image.tmdb.org/t/p/w185/${cast.profile_path}`}
                />
                <strong className="item__name">{cast.name}</strong>
                <span className="item__desc">{cast.known_for_department}</span>
              </li>
            );
          })}
        </ul>
        {cast.length - 1 > maxLen && (
          <Button onClick={open} className="btn btn--sm btn--ghost">
            {!isOpen ? "Show More" : "Hide"}
            <FontAwesomeIcon size={20} icon={faArrowDown} />
          </Button>
        )}
      </div>
    </>
  );
}
