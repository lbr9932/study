import "@/styles/components/loading.scss";

export function Loading({ children }) {
  return (
    <div className="loading">
      <p className="loading__text">{children}</p>

      <div role="presentation">
        <div className="loading__line"></div>
        <div className="loading__line"></div>
        <div className="loading__line"></div>
      </div>
    </div>
  );
}
