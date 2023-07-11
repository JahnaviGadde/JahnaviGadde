import React from "react";
import CollapsibleExample from './components/Navbar';
import Home from "./page/Home";

function App() {
    return (
        <div className = "App" >
        <div className = "child" >
         <CollapsibleExample/>
         <Home/>
        </div>
        </div >
       
    );
}

export default App;