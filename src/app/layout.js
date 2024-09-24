"use client";

import "../styles/globals.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "../components/Header"; // 헤더 컴포넌트 import
import Footer from "../components/Footer"; // 풋터 컴포넌트 import
config.autoAddCss = false;

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Lenis 초기화
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    // 매 프레임마다 Lenis 업데이트
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 컴포넌트 언마운트 시 Lenis 정리
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="ko">
      <body suppressHydrationWarning>
        <div className="gr" role="presentation"></div>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
