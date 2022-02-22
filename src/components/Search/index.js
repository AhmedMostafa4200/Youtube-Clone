import Input from "../inputs/Input";
import YoutubeLogo from "../resources/icons/YoutubeLogo";
import "./Search.scss";

const Search = () => {
  return (
    <header className="search-container">
      <YoutubeLogo />
      <div className="search-container__input">
        <Input />
      </div>
    </header>
  );
};

export default Search;
