export default function Picture({ immediate, src, style, srcBP, bp, alt }) {
  return (
    <>
      {src && (
        <picture>
          {srcBP && <source srcset={srcBP} media={`(min-width: ${bp})`} />}
          <img
            src={src}
            style={style}
            loading={immediate ? "eager" : "lazy"}
            alt={alt}
          />
        </picture>
      )}
    </>
  );
}

export function NoPicture() {
  return <span className="no-image">No image</span>;
}

export function PictureWrap(props) {
  return (
    <div className={props.className}>
      {props.isImage ? <Picture {...props} /> : <NoPicture />}
    </div>
  );
}
