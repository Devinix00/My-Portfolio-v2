import React from "react";
import InitialScreen from "./components/initialScreen/InitialScreen";
import TechStacks from "./components/techStacks/TechStacks";
import WhiteSpaceContainer from "./components/containers/WhiteSpaceContainer";

function App() {
  return (
    <React.Fragment>
      <div className="text-silver">
        <InitialScreen />
        <WhiteSpaceContainer>
          <TechStacks />
        </WhiteSpaceContainer>
      </div>
    </React.Fragment>
  );
}

export default App;
