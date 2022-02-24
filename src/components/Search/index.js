import Input from "../inputs/Input";
import YoutubeLogo from "../resources/icons/YoutubeLogo";
import "./Search.scss";

function Search() {
  return (
    <header className="search-container">
      <YoutubeLogo />
      <form
        onSubmit={e => e.preventDefault()}
        className="search-container__form"
      >
        <Input />
      </form>
    </header>
  );
}

export default Search;
