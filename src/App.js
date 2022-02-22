import Search from "./components/Search";
import Media from "./components/media/Media/index";
import { Provider } from "react-redux";
import store from "./store";
import MediaList from "./components/media/MediaList";

function App() {
  const windowObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry.contentRect.width);
    });
  });

  const bodyWidth = document.querySelector("body");
  windowObserver.observe(bodyWidth);

  return (
    <Provider store={store}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Search />
        <MediaList />
      </div>
    </Provider>
  );
}

export default App;
