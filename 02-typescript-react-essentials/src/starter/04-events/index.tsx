import { useState } from "react";

interface User {
  name: string;
  email: string;
}

function Component(): JSX.Element {
  const [name, setName] = useState<string>("");

  const [email, setEmail] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.value);
    setName(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newUser: User = {
      name: formData.get(name) as string,
      email: formData.get(email) as string,
    };

    console.log(newUser);
  };
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Events</h2>
      <section>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={handleChange}
              value={name}
              className="form-input mb-1"
              type="text"
              name="name"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              value={email}
              className="form-input mb-1"
              type="text"
              name="email"
            />
          </div>

          <button className="btn btn-block" type="submit">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
export default Component;
