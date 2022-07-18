import "./styles.css";
import Draggable from "react-draggable";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState({});
  console.log(state);
  const Draging = () => {
    return (
      <>
        <div>
          <h1>X:{state.screenX}</h1>
          <h1>Y:{state.screenX}</h1>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="App">
        <Draggable grid={[25, 25]} onDrag={(e) => setState(e)}>
          <div
            className="demo"
            style={{ backgroundColor: "red", height: "100px", width: "100px" }}
          ></div>
        </Draggable>
        <Draging />
      </div>
    </>
  );
}
