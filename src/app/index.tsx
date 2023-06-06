import { RouterProvider } from "react-router-dom";
import "./index.scss";
import "normalize.css";
import { router } from "./router";

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
