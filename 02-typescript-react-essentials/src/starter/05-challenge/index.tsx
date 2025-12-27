type BasicUser = {
  type: "basic";
  name: string;
};

type AdvancedUser = {
  type: "advanced";
  name: string;
  email: string;
};

type UserProps = BasicUser | AdvancedUser;

function Component(props: UserProps): JSX.Element {
  const { type, name } = props;
  return (
    <div>
      <h2>React & Typescript</h2>
      {type === "basic" ? (
        <>
          <div>name{name}</div> <div>type{type}</div>{" "}
        </>
      ) : (
        <>
          <div>name{name}</div>
          <div>type{type}</div> <div>email{props.email}</div>{" "}
        </>
      )}
    </div>
  );
}
export default Component;
