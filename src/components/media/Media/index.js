import useWindowWidObserv from "../../../hooks/useWindowWidObserv";
import "./Media.scss";

const Media = ({ mediaData }) => {
  const windowWidth = useWindowWidObserv();
  return (
    <div className="media">
      <div className="media__video">
        {/* <div
          style={{
            maxWidth: "180px",
            width: "180px",
            maxHeight: "120px",
            height: "120px",
            background: "blue",
          }}
        ></div> */}
        <img
          alt="media"
          src={mediaData.snippet.thumbnails.medium.url}
          style={{ width: "320px", height: "180px", objectFit: "cover" }}
        />
      </div>
      <div className="media__caption">
        <h3 className="media__title">{mediaData.snippet.title}</h3>
        <p className="media__channel">{mediaData.snippet.channelTitle}</p>
        {windowWidth > 560 && (
          <p className="media__desc">{mediaData.snippet.description}</p>
        )}
      </div>
    </div>
  );
};

export default Media;
