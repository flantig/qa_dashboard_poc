export class Nightly {
    name: string;
    urlSnippet: string;

    constructor(name: string) {
        this.name = name
        this.urlSnippet = name.replaceAll(" ", "-")
    }
}
