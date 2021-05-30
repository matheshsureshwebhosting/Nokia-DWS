import React, { Component } from 'react'
import { Slidercontext } from "../Context/Slidercontext"
import video1 from "../../assets/videos/vacclift/9.mp4"
import "./step.css"
import SweetAlert from "sweetalert2";
import axios from 'axios'
import Steps from "./Steps"


export default class Step9 extends Component {
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
        const Displayalert = (name, results) => {
            if (name === "alertSuccess") {
                SweetAlert.fire({
                    title: 'Provide Following Details',
                    html: "<textarea style='margin-top:10px;border-radius: 0px !important;width: 100%; ' id='des' type='text' className='form-control' placeholder='Remarks'></textarea>",
                    showDenyButton: false,
                    showCancelButton: false,
                    confirmButtonText: `Save`,
                }).then((result) => {
                    if (result.isConfirmed) {  
                window.location = "/";
                        const description = document.getElementById("des").value
                        if (description.length === 0) {
                            SweetAlert.fire('Enter description', '', 'error')
                            return false
                        } else {
                            SweetAlert.fire('Saved!', '', 'success')                                               
                            axios.post("http://localhost:4000/send", {
                                date: localStorage.getItem("date"),
                                shift: localStorage.getItem("shift"),
                                machine_Sl_No: localStorage.getItem("machine_Sl_No"),
                                checked_by: localStorage.getItem("operator_name"),
                                process1_result: localStorage.getItem("prosses1_result"),
                                // process2_status: localStorage.getItem("prosses2_status"),
                                process2_result: localStorage.getItem("prosses2_result"),
                                // process3_status: localStorage.getItem("prosses3_status"),
                                process3_result: localStorage.getItem("prosses3_result"),
                                // process4_status: localStorage.getItem("prosses4_status"),
                                process4_result: localStorage.getItem("prosses4_result"),
                                // process5_status: localStorage.getItem("prosses5_status"),
                                process5_result: localStorage.getItem("prosses5_result"),
                                // process6_status: localStorage.getItem("prosses6_status"),
                                process6_result: localStorage.getItem("prosses6_result"),
                                // process7_status: localStorage.getItem("prosses7_status"),
                                process7_result: localStorage.getItem("prosses7_result"),
                                // process8_status: localStorage.getItem("prosses8_status"),
                                process8_result: localStorage.getItem("prosses8_result"),
                                process9_result: results,
                                // process9_status:paymentType,
                                description: description
                            }).then((res) => {
                                localStorage.removeItem("date")
                                localStorage.removeItem("shift")
                                localStorage.removeItem("machine_Sl_No")
                                localStorage.removeItem("machine_name")
                                localStorage.removeItem("operator_name")
                                localStorage.removeItem("prosses1_result")
                                localStorage.removeItem("prosses2_result")
                                localStorage.removeItem("prosses3_result")
                                localStorage.removeItem("prosses4_result")
                                localStorage.removeItem("prosses5_result")
                                localStorage.removeItem("prosses6_result")
                                localStorage.removeItem("prosses7_result")
                                localStorage.removeItem("prosses8_result")
                                localStorage.removeItem("step1")
                                localStorage.removeItem("step2")
                                localStorage.removeItem("step3")
                                localStorage.removeItem("step4")
                                localStorage.removeItem("step5")
                                localStorage.removeItem("step6")
                                localStorage.removeItem("step7")
                                localStorage.removeItem("step8")
                                // window.location.replace("/")
                                this.props.history.push("/")
                            })
                        }
                    } else if (result.isDenied) {
                        SweetAlert.fire('Changes are not saved', '', 'info')
                    }
                })
            }
        }
        return (
            <>
              <Steps
                stepTitle="Vacuum Pressure Gauge"
                videoSrc={video1}
                onClickContinue={(e) => Displayalert(e.target.name, "Yes")}
                onClickIssue={(e)=>Displayalert(e.target.name,"No")}
                />
            </>
        )
    }
}