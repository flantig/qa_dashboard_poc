import {DogService} from "../../Services/Dog.Service";
import React, {useEffect} from "react";
import {Dog} from "../../Models/Dog";

const dogService: DogService = new DogService("https://random.dog/woof.json");

function Doggo() {
    let [dogs, setdogs] = React.useState<Dog>({fileSize: "", url: ""});
    useEffect(() => {
        getDog()
    }, []);

    const getDog = () => {
        dogService.GET<Dog>().then(response => setdogs(response))
        console.log(dogs)
    }

    return (
        <div className="App">
            <header className="App-header">
                {
                    dogs.url !== ""
                        ? <img src={dogs.url} height={"250px"} width={"250px"} className="App-logo" alt="logo"/>
                        : <img src="https://i.pinimg.com/originals/36/b1/6c/36b16cc68bbbca07f1c37183112de693.gif" className="App-logo" alt="logo"/>
                }

                {/*<List items={[*/}
                {/*    {key: "1", name: "SASelenium"},*/}
                {/*    {key: "2", name: "QA-Api-Testing"}*/}
                {/*]} renderer={(x) => <div>{x.name}</div>}/>*/}

                <button onClick={() => {getDog()}}>
                    Click
                </button>
            </header>
        </div>
    );
}

export default Doggo;