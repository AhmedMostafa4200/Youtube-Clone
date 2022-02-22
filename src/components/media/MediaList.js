import { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import Media from "./Media";
import Spinner from "../Spinner/index";

import "./MediaList.scss";

function MediaList() {
  const searchKey = useSelector(state => state.search.searchKey);

  const [mediaList, setMediaList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_KEY}&q=${searchKey}`
        );
        setMediaList(data);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    getData();
  }, [searchKey]);

  console.log(mediaList);

  return (
    <div className="media-list">
      {mediaList?.items?.map(media => (
        <Media key={media.etag} mediaData={media} />
      ))}
      {isLoading && <Spinner />}
      {isError && <p>Error</p>}
    </div>
  );
}

export default MediaList;
