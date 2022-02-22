import useWindowWidObserv from "../../../hooks/useWindowWidObserv";

import "./Media.scss";

function Media({ mediaData }) {
  const windowWidth = useWindowWidObserv();
  return (
    <div className="media">
      <div className="media__video">
        <img
          alt="media"
          src={mediaData.snippet.thumbnails.medium.url}
          className="media__avatar"
        />
      </div>
      <div className="media__caption">
        <h3 className="media__title">
          {windowWidth > 560
            ? mediaData.snippet.title
            : mediaData.snippet.title.slice(0, 20)}
        </h3>
        <p className="media__channel">{mediaData.snippet.channelTitle}</p>
        {windowWidth > 560 && (
          <p className="media__desc">{mediaData.snippet.description}</p>
        )}
      </div>
    </div>
  );
}

export default Media;
