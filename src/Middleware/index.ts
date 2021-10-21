import express, {Request, Response} from 'express';
import cors from 'cors';
const fetch = require("isomorphic-fetch")
const app = express();

app.use(cors());
app.use(express.json());

/**
 * Approved middleware for use in the react app, use "npm run dev" to run this as a middleware service and the react
 * app simultaneously.
 */

app.get("/duck", async(req: Request, res: Response) =>{
    try{
        const response = await fetch("https://random-d.uk/api/v2/random");
        const json = await response.json()
        res.send(json)
    }catch (e) {
        console.log(e)
    }
})

app.listen(5000, ()=>{
    console.log("Server has started on port 5000")
})

export {};