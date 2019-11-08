import React from 'react';
import Header from "./components/Header/Header"
import Body from "./components/Body/Body";
import {SectionProvider} from "./contexts/SectionContext";

function App() {
    return (
        <SectionProvider>
            <div className="main">
                <Header />
                <Body />
                {/*<Footer />*/}
            </div>
        </SectionProvider>
    );
}

export default App;
