import {QueryParams} from "./QueryParams";

export class Service {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    async GET<T>(params?: QueryParams): Promise<T> {
        return await fetch(this.endpoint + ((params) ? params.toString() : ""))
            .then(response => response.json() as Promise<T>)
            .then(json => json)
    }

    //ToDo: Implement status code check

    // async POST(params?: QueryParams): Promise<any> {
    //     const response = await fetch(this.endpoint!, {method: 'POST', body: ((params) ? params.toJson() : "")});
    //     return await response.json();
    // }
}
