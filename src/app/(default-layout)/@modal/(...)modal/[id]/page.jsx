"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import "@/styles/components/videpLayer.scss";
import React, { useEffect, useRef } from "react";

export default function Page({ params }) {
  const iframeRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // YouTube API 스크립트를 로드
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // YouTube API 로드 후에 실행될 함수
    window.onYouTubeIframeAPIReady = function () {
      new window.YT.Player(iframeRef.current, {});
    };
  }, []);

  // 팝업이 닫힐 때 비디오를 정지

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={"video-layer"}
    >
      <button
        type="button"
        className="video-close"
        onClick={() => router.back()}
      >
        🗙
      </button>
      <div className="video-layer__bg">
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${params.id}?enablejsapi=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
}
