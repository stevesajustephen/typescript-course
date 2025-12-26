import { InputHTMLAttributes, useState } from "react";

function Component() {
  const [name, setName] = useState<string>("");

  const [email, setEmail] = useState<string>("");

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Events</h2>
      <section>
        <form action="" className="form">
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-input mb-1"
              type="text"
              id="name"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-input mb-1"
              type="text"
              id="email"
            />
          </div>
        </form>
      </section>
    </div>
  );
}
export default Component;
