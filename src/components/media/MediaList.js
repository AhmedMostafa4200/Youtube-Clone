import { useCallback } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import Media from "./Media";
import Spinner from "../Spinner/index";

import useQuery from "../../hooks/useFetchData";

import "./MediaList.scss";

function MediaList() {
  const searchKey = useSelector(state => state.search.searchKey);

  const fetchMedia = useCallback(
    () =>
      axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_KEY}&q=${searchKey}`
      ),
    [searchKey]
  );

  const { data: mediaList, isLoading, error } = useQuery(fetchMedia);

  return (
    <div className="media-list">
      {mediaList?.items?.map(media => (
        <Media key={media.etag} mediaData={media} />
      ))}
      {isLoading && <Spinner />}
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default MediaList;
