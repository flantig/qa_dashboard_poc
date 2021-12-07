import React, {useContext, useEffect, useState} from "react";
import {HtmlReportService} from "../../Services/HtmlReport.Service";
import {Nightly} from "../../Classes/Nightly";
import {Tests} from "../../Data/NightlyTests";
import {Button, Menu} from "grommet";
import {getCurrentDate, getCurrentDay, getCurrentMonth} from "../../Utility";

export default function Reports() {
    const optionStyling = {marginBottom: "16px", marginTop: "16px", marginLeft: "12px", border: "1px solid", borderRadius: "5px"}

    let [reportService, setReportService] = React.useState(new HtmlReportService(new Nightly(Tests[0]), getCurrentDate()));
    let [report, setReport] = React.useState(Tests[0])
    //ToDo: add year support
    let [day, setDay] = React.useState(getCurrentDay())
    let [month, setMonth] = React.useState(getCurrentMonth())

    useEffect(() => {
        setReportService(new HtmlReportService(new Nightly(report), "2021" + month + day))
    }, [day, month])

    return (
        <div>
            <div>
                {/*ToDo: change border color to change based on theme and "generify" these menu options*/}
                <Menu style={optionStyling} label={report} items={
                    Tests.map(test => {
                        return {
                            label: test, onClick: () => {
                                setReport(test)
                                setReportService(new HtmlReportService(new Nightly(test), "2021" + month + day))
                            }
                        }
                    })
                }/>
                <Menu style={optionStyling} label={"Month: " + month} items={
                    Array.from({length: 12}, (_, i) => {
                        let num = Number(i + 1);
                        return {
                            label: num, onClick: () => {
                                setMonth(num.toString().padStart(2, '0'))
                            }
                        }
                    })
                }/>
                <Menu style={optionStyling} label={"Day: " + day} items={
                    Array.from({length: 31}, (_, i) => {
                        let num = Number(i + 1);
                        return {
                            label: num, onClick: () => {
                                setDay(num.toString().padStart(2, '0'))
                            }
                        }
                    })
                }/>
            </div>
            <iframe className={"reports-frame"} src={reportService.endpoint} frameBorder="0"/>
        </div>
    )
}
