import { useState } from "react";

interface User {
  name: string;
  age: number;
}

interface Employee extends User {
  empNo: number;
  department?: string;
}

const employee1: Employee = {
  name: "steve",
  age: 28,
  empNo: 123,
  department: "CS",
};

function Component(): JSX.Element {
  const [text, setText] = useState("shakeAndBake");

  const [list, setList] = useState<Employee[]>([employee1]);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText("Clicked!!");
          setList([]);
        }}
      >
        Click Me
      </button>
      <h2>
        {text} {list[0].name}
      </h2>
    </div>
  );
}
export default Component;
