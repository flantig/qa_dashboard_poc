import {Service} from "../Classes/Service";
import {Nightly} from "../Classes/Nightly";
import {getCurrentDate} from "../Utility";

export class HtmlReportService extends Service{
    nightly: Nightly;
    date: string;
    //ToDo: status is blocked by CORS - html reports don't have the header.
    //status: string | undefined;
    constructor(nightly: Nightly, date: string) {
        super(generateUrl(nightly, date));
        this.nightly = nightly;
        this.date = date;
    }

    setDate = (date: string) => {
        this.date = date;
    }
}

let generateUrl = (nightly: Nightly, date: string) => {
    return "https://saselenium-artifacts.s3.amazonaws.com/" + date + "/" + nightly.urlSnippet + ".html";
}
