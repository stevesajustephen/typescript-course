import { type PropsWithChildren } from "react";

type UserProps = PropsWithChildren<{
  name?: string;
  age: number;
  children?: React.ReactNode;
}>;

function Component({ name, age, children }: UserProps): JSX.Element {
  return (
    <div>
      {children}
      <h2>React & Typescript {name}</h2>
      <h2>Props {age}</h2>
    </div>
  );
}
export default Component;
