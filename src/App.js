import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import ClassComponent from "./ClassComponent";

function App() {
  return (
    // JSX
    <div className="App">
      {/* will be converted into <div class="App"> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ClassComponent />
        <ClassComponent />
        <ClassComponent />

        {/* PROPS in REACT COMPONENT are like ATTRIBUTES on HTML ELEMENTS*/}
        <MyComponent name="Andi" count={5} func={() => console.log("hello")} />
      </header>
    </div>
  );
}

export default App;
