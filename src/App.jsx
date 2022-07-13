import { useState } from "react";
import MainTable from "./components/MainTable";
import MainMap from "./components/MainMap";
import { Resizable } from "react-resizable";
import "antd/dist/antd.css";
import "./App.scss";
import { useSelector } from "react-redux";
import { Spin } from "antd";

function App() {
  const isLoading = useSelector((state) => state.fetching);
  const [dimentions, setDimentions] = useState({
    width: 500,
    height: window.innerHeight,
  });
  const onResize = (event, { element, size, handle }) => {
    size.width > 300 && setDimentions({ width: size.width });
  };
  return isLoading ? (
    <div className="spinner">
      <Spin />
    </div>
  ) : (
    <div className="App">
      <Resizable
        height={dimentions.height}
        width={dimentions.width}
        onResize={onResize}
      >
        <div
          className="box"
          style={{
            width: dimentions.width + "px",
            height: dimentions.height + "px",
          }}
        >
          <MainTable />
        </div>
      </Resizable>
      <MainMap />
    </div>
  );
}

export default App;
