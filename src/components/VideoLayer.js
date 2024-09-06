import "../styles/components/videpLayer.scss";
import React, { useEffect, useRef } from "react";

export default function VideoLayer({ videoId, isOpen, onClose }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    // YouTube API 스크립트를 로드
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // YouTube API 로드 후에 실행될 함수
    window.onYouTubeIframeAPIReady = function () {
      new window.YT.Player(iframeRef.current, {
        events: {
          onReady: onPlayerReady,
        },
      });
    };

    function onPlayerReady(event) {
      if (!isOpen) {
        event.target.pauseVideo(); // 팝업이 닫혔을 때 비디오 정지
      }
    }
  }, [isOpen]);

  // 팝업이 닫힐 때 비디오를 정지
  useEffect(() => {
    if (!isOpen && iframeRef.current) {
      const iframe = iframeRef.current.contentWindow;
      iframe.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    }
  }, [isOpen]);

  return (
    <div className={"video-layer" + (isOpen ? " is-active" : "")}>
      <button type="button" className="video-close" onClick={onClose}>
        🗙
      </button>
      <div className="video-layer__bg">
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
