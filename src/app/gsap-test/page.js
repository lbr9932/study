"use client";

export default function Home() {
  return (
    <main>
      <section className="section section1">
        <h1>Section 1</h1>
      </section>
      <section className="section section2">
        <div className="animate-box">Animated Box</div>
      </section>
      <style jsx>{`
        main {
          font-family: Arial, sans-serif;
        }

        .section {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 2rem;
        }

        .section1 {
          background-color: lightcoral;
        }

        .section2 {
          background-color: lightblue;
        }

        .animate-box {
          width: 100px;
          height: 100px;
          background-color: yellow;
          opacity: 0;
          transform: translateY(50px);
        }
      `}</style>
    </main>
  );
}
