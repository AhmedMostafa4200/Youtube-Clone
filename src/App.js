import { Provider } from "react-redux";
import Search from "./components/Search";
// import Media from "./components/media/Media";
import store from "./store";
import MediaList from "./components/media/MediaList";

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Search />
        <MediaList />
      </div>
    </Provider>
  );
}

export default App;
