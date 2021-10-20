import React, {useEffect} from 'react';
import './App.css';
import {List} from "./Components/Test";
import {DuckService} from "./Services/Duck.Service";

const duckService: DuckService = new DuckService("https://random-d.uk/api/v2/random");

function App() {
    let [ducks, setDucks] = React.useState({});
    useEffect(() => {
        setDucks(duckService.GET())
        console.log(ducks)
    }, []);
    //ToDo: Finish implementing a network call, and render it's results.

    return (
        <div className="App">
            <header className="App-header">
                <img src="https://i.pinimg.com/originals/36/b1/6c/36b16cc68bbbca07f1c37183112de693.gif"
                     className="App-logo" alt="logo"/>

                <List items={[
                    {key: "1", name: "SASelenium"},
                    {key: "2", name: "QA-Api-Testing"}
                ]} renderer={(x) => <div>{x.name}</div>}/>

            </header>
        </div>
    );
}

export default App;
