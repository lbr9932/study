import { useState } from "react";
import "../styles/components/hero.scss";
import { PictureWrap } from "./Picture";
import VideoLayer from "./VideoLayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Hero({ isImage, ytVideo, src, title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="hero">
        <PictureWrap
          className="media-box"
          immediate={true}
          isImage={!!isImage}
          src={src}
          alt={title}
        />

        <div className="wrap hero__text">
          <h1 className="hero__h">{title}</h1>
          {ytVideo && (
            <button
              type="button"
              className="video-open"
              onClick={() => setIsOpen(true)}
            >
              <FontAwesomeIcon size={32} icon={faPlay} />
            </button>
          )}
        </div>
      </header>

      {ytVideo && (
        <VideoLayer
          videoId={ytVideo}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
