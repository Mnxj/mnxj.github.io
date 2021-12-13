import React from "react";
import "./App.css";
import { ProjectListScreen } from "./screens/prokect-list";
import { LoginScreen } from "./screens/login";

function App() {
  return (
    <div className="App">
      <LoginScreen></LoginScreen>
      {/*<ProjectListScreen />*/}
    </div>
  );
}

export default App;
