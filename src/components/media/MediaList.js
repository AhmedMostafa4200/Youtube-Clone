import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Media from "./Media";

import "./MediaList.scss";

function MediaList() {
  const searchKey = useSelector(state => state.search.searchKey);

  const [mediaList, setMediaList] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_KEY}&q=${searchKey}`
      );
      searchKey && setMediaList(data);
      //   setIsLoading(isLoading);
    };
    getData();
  }, [searchKey]);

  return (
    <div className="media-list">
      {mediaList?.items?.map(media => (
        <Media key={media.etag} mediaData={media} />
      ))}
    </div>
  );
}

export default MediaList;
