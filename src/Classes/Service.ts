import {QueryParams} from "./QueryParams";
import axios from "axios";

export class Service {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    async GET<T>(params?: QueryParams): Promise<T> {
        return await axios.get(this.endpoint + ((params) ? params.toString() : ""), {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        });
    }

    // async POST(params?: QueryParams): Promise<any> {
    //     const response = await fetch(this.endpoint!, {method: 'POST', body: ((params) ? params.toJson() : "")});
    //     return await response.json();
    // }
}
