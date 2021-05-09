import React from "react";
import "./App.css";
import StudentPage from "./pages/StudentPage";
import "office-ui-fabric-react/dist/css/fabric.css";
import { initializeIcons } from "office-ui-fabric-react";
class App extends React.Component{
  render() {
    initializeIcons();
    return (
      <div className="App">
        <StudentPage />
      </div>
    );
  }
}

export default App;
