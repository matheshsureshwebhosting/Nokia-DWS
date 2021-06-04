
import React, { Component, Fragment } from 'react'
import { Slidercontext } from "../Context/Slidercontext"
import video1 from "../../assets/videos/vacclift/8.mp4"
import "./step.css"
import SweetAlert from "sweetalert2";
import Steps from "./Steps"

export default class Step8 extends Component {
    static contextType = Slidercontext
    constructor(props) {
        super()
        this.state = {
            date: "",
            machine_name: "",
            machine_Sl_No: "",
            operator_name: "",
            shift: "",
            paymentType: ""
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { sliderenable } = this.context
        const Displayalert = (name, results) => {
            console.log(results)
            if (name === "alertSuccess"){ 
                SweetAlert.fire({
                    title: "Good job!",
                    text: "Thank You!",
                    icon: "success",
                })}
                if(name==="alertWarning")
                SweetAlert.fire({
                    title: "OK NOTED",
                    text: "Please Inform Technician",
                    icon: "info",
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        // localStorage.setItem("prosses8_status", paymentType)
                        localStorage.setItem("prosses8_result", results)
                        localStorage.setItem("step8", "okay")
                        sliderenable(this, "step9")
                        this.props.history.push("/step9")
                    }
                })
        }
        return (
            <Fragment>
                 <Steps
                stepTitle="Vacuum hose- from pump to barrel"
                videoSrc={video1}
                onClickContinue={(e) => Displayalert(e.target.name, "Yes")}
                onClickIssue={(e)=>Displayalert(e.target.name,"No")}
                doNotTouch="true"
                />
            </Fragment >
        )
    }
}
