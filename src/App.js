import "./App.css";
import Parse from "parse/dist/parse.min.js";
import { UserRegistration } from "./UserRegistration";

const PARSE_APPLICATION_ID = "obibBs4tAKCfeo4BWvzyUoFgmVAdM1fFPr6dlBUT";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "SB0bApd5cRhC0gm49QGy1OMBJyA0vpg3ALoaywbH";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserRegistration />
      </header>
    </div>
  );
}

export default App;
