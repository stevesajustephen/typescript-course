import Component from "./starter/02-props";

function App() {
  return (
    <main>
      <Component name="steve" age={123} />
      <Component name="Basil" age={28}>
        <h1>Hello World</h1>
      </Component>
    </main>
  );
}

export default App;
