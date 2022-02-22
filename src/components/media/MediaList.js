import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Media from "./Media";

import "./MediaList.scss";

const MediaList = () => {
  const searchKey = useSelector((state) => state.search.searchKey);

  const [mediaList, setMediaList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyD_PeT5w520nRRcOABXuDGiyaeC1O0DQhA&q=${searchKey}`
      );
      searchKey && setMediaList(data);
      //   setIsLoading(isLoading);
    };
    getData();
  }, [searchKey]);
  console.log(mediaList, isLoading, "dataaaa");

  return (
    <div className="media-list">
      {mediaList?.items?.map((media) => (
        <Media key={media.etag} mediaData={media} />
      ))}
    </div>
  );
};

export default MediaList;
