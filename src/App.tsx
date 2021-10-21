import React, {useEffect} from 'react';
import './App.css';
import {List} from "./Components/Test";
import {Service} from "./Classes/Service";
import {Duckie} from "./Models/Duckie";

const listObj = [
    {key: "1", name: "SASelenium"},
    {key: "2", name: "QA-Api-Testing"}
];

async function fetchDuck(){
    const serve = new Service("http://localhost:5000")
    const response = await serve.GET<Duckie>("/duck")
    return response;
}

/**
 * I set a few fallbacks in case something doesn't work. If the actual api isn't being hit correctly but
 * the useEffect is being fired off properly, the initialState "filler" should appear. If the useEffect isn't
 * working properly the <p> tag saying "Loading..." should appear. However, if everything works properly, you get
 * a duck on screen.
 *
 * @state ducks Will eventually by a url of an image of a duck
 * @state loaded Used to keep track of whether or not another state has been "mounted"
 *
 */
function App() {
    let [ducks, setDucks] = React.useState("filler");
    let [loaded, setLoaded] = React.useState(false);

    useEffect(() => {
        fetchDuck().then(data =>{
            setDucks(data.url)
            console.log("We have loaded the duck in reactapp")
            console.log(ducks)
        })
        setLoaded(true)
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src="https://i.pinimg.com/originals/36/b1/6c/36b16cc68bbbca07f1c37183112de693.gif"
                     className="App-logo" alt="logo"/>

                <List items={listObj} renderer={(x) => <div className={"list-item"}>{x.name}</div>}/>

                {loaded ? <img  src={ducks} alt={"Nothing here doc"}/> : <p>"Loading..."</p>}

            </header>
        </div>
    );
}

export default App;
