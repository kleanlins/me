import Body from "./pages/Body";
import Header from "./components/Header/Header";
import React from "react";
import { SectionProvider } from "./contexts/SectionContext";

function App() {
  return (
    <SectionProvider>
      <div className="main">
        <Header />
        <Body />
      </div>
    </SectionProvider>
  );
}

export default App;
