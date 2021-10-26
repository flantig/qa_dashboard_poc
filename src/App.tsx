import React, {useEffect} from 'react';
import './App.css';
import {DogService} from "./Services/Dog.Service";
import {Dog} from "./Models/Dog";
import Doggo from "./Components/Pages/Doggo"



function App() {


    return (


        <div className="App">
            <Doggo/>
        </div>
    );
}

export default App;
