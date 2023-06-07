import { RouterProvider } from "react-router-dom";
import "./index.scss";
import "normalize.css";
import { router } from "./router";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
