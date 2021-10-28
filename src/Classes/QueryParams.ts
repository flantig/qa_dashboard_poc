export class QueryParams{
    params: Map<string, string>;

    constructor(params: Map<string, string>) {
        this.params = params;
    }

    static toString(): string {
        let out: string = "?";
        let isFirst: boolean = true;
        // @ts-ignore
        for (let entry of this.params.entries()) {
            if (!isFirst) {
                out += "&";
            } else {
                isFirst = false;
            }
            out += entry[0] + "=" + entry[1];
        }
        return out;
    }

    toJson(): string {
        let out: string = "{";
        // @ts-ignore
        for (let entry of this.params.entries()) {
            out += "\"" + entry[0] + "\":" + "\"" + entry[1] + "\"";
        }
        return out;
    }
}
