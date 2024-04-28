import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "./services/store";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
