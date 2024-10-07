"use client";

import Link from "next/link";
import "@/styles/components/header.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: headerRef.current,
      start: "center top",
      end: "50000 top",
      toggleClass: {
        targets: headerRef.current,
        className: "is-sticky",
      },
    });
  }, [headerRef]);

  return (
    <header className="header" ref={headerRef}>
      <h1 className="logo">
        <Link href="/">
          <em>MOVIE</em> TIME
        </Link>
      </h1>
      <nav className="gnb">
        <ul className="d1">
          <li>
            <Link href="/movie">Movie Search</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}
