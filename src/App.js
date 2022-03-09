import React from "react";
import Post from "./components/Post";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Post />
      </Provider>
    </>
  );
}
