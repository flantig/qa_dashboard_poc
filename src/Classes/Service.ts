import {QueryParams} from "./QueryParams";
import axios from "axios";

export class Service {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    /**
     * Allows us to define the object structure of the json file, refer to ../Middleware/index.ts to see the current
     * apis we're allowing through the middleware.
     *
     * @param request
     */
    async GET<T>(params: string): Promise<T> {
        const response = await fetch(this.endpoint + params);
        const body = await response.json();
        console.log("returning the body")
        console.log(body)
        return body;
    }

}
