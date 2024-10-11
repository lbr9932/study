import "@/styles/components/hero.scss";
import { PictureWrap } from "./Picture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Hero({ isImage, ytVideo, src, title }) {
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
            <Link href={`/modal/${ytVideo}`} className="video-open">
              <FontAwesomeIcon size={32} icon={faPlay} />
            </Link>
          )}
        </div>
      </header>
    </>
  );
}
