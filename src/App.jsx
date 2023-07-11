import React from "react";
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import CollapsibleExample from './components/Navbar';
import Home from "./page/Home";

function App() {
    return (
        <div className = "App" >
        <div className = "child" >
         <CollapsibleExample/>
         {/* <BrowserRouter>
         <Route exact path='/' render= {<Home/>} />
        </BrowserRouter> */}
        </div>
        </div >
       
    );
}

export default App;