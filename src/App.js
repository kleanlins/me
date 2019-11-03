import React from 'react';
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Body from "./components/Body/Body";
import './App.css'
import {StateProvider} from "./components/StateContext";

function App() {
    return (
        <StateProvider>
            <div className="main">
                <Header />
                <Body />
                <Footer />
            </div>
        </StateProvider>
    );
}

export default App;
