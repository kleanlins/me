import "./App.scss";

import Body from "./containers/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import React from "react";
import { SectionProvider } from "./contexts/SectionContext";

function App() {
  return (
    <SectionProvider>
      <div className="main">
        <Header />
        <Body />
        {/* <Footer /> */}
      </div>
    </SectionProvider>
  );
}

export default App;
