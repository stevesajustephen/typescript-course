import { useState } from "react";

function Component(): JSX.Element {
  const [text, setText] = useState("shakeAndBake");

  const [list, setList] = useState<string[]>([]);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText("Clicked!!");
          setList(["age"]);
        }}
      >
        Click Me
      </button>
      <h2>
        {text} {list[0]}
      </h2>
    </div>
  );
}
export default Component;
