import "./banner.css";

const Banner = ({ src, alt, title = "" }) => {
    return (
        <header className="banner">
            <img src={src} alt={alt} />

            { title && (
            <h1>
                <span> {title.slice(0, 11)}</span>
          <span> {title.slice(11)}</span>
        </h1>
      )}
    </header>
    )
};

export default Banner







