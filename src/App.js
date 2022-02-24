import { Provider } from "react-redux";

import store from "./store";

import Search from "./components/Search";
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
