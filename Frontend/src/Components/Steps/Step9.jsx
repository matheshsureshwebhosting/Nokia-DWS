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
        this.step9Ref = React.createRef()   // Create a ref object 
        this.state = {
            date: "",
            machine_name: "",
            machine_Sl_No: "",
            operator_name: "",
            shift: "",
            paymentType: "",
            counterTime: 0
        }
    }
    componentDidMount() {
        this.step9Ref.current.scroll(0, 1800);
        this.interval = setInterval(() => this.setState({ counterTime: this.state.counterTime + 1 }), 1000);
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentWillUnmount = () => {
        localStorage.removeItem("vacName")
        localStorage.removeItem("vacMachineId")
    }
    componentWillUnmount = () => {
        clearInterval(this.interval);
    }
    render() {
        const buttonStatus = this.state.counterTime > 5 ? false : true;
        const Displayalert = (name, results) => {
            if (name === "alert")
                SweetAlert.fire({
                    // text: "Please Inform Technician!",
                    icon: "info",
                    title: 'OK Noted! Provide Following Details',
                    html: "<textarea style='margin-top:10px;border-radius: 0px !important;width: 100%; ' id='des' type='text' className='form-control' placeholder='Remarks'></textarea>",
                    showDenyButton: false,
                    showCancelButton: false,
                    confirmButtonText: `Save`,
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            const description = document.getElementById("des").value
                            if (description.length === 0) {
                                SweetAlert.fire('Enter description', '', 'error')
                                return false
                            } else {
                                SweetAlert.fire('Saved!', '', 'success')
                                const { date, machine_Sl_No, shift, operator_name, prosses1_result, prosses2_result, prosses3_result, prosses4_result, prosses5_result, prosses6_result, prosses7_result, prosses8_result } = this.context
                                const vaccumestatus = [prosses1_result, prosses2_result, prosses3_result, prosses4_result, prosses5_result, prosses6_result, prosses7_result, prosses8_result, results]
                                var finalstatus;
                                if (vaccumestatus.includes("No")) {
                                    finalstatus = "In Complete"
                                } else {
                                    finalstatus = "Complete"
                                }
                                const datas = {
                                    date: date,
                                    shift: shift,
                                    machine_Sl_No: machine_Sl_No,
                                    checked_by: operator_name,
                                    process1_result: prosses1_result,
                                    process2_result: prosses2_result,
                                    process3_result: prosses3_result,
                                    process4_result: prosses4_result,
                                    process5_result: prosses5_result,
                                    process6_result: prosses6_result,
                                    process7_result: prosses7_result,
                                    process8_result: prosses8_result,
                                    process9_result: results,
                                    description: description,
                                    status: finalstatus
                                }
                                axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/vaccume/send`, datas).then((res) => {
                                    if (res.data === true) {
                                        localStorage.removeItem("step1")
                                        localStorage.removeItem("step2")
                                        localStorage.removeItem("step3")
                                        localStorage.removeItem("step4")
                                        localStorage.removeItem("step5")
                                        localStorage.removeItem("step6")
                                        localStorage.removeItem("step7")
                                        localStorage.removeItem("step8")
                                    }
                                    this.props.history.push("/")
                                })
                            }
                        } else if (result.isDenied) {
                            SweetAlert.fire('Changes are not saved', '', 'info')
                        }
                    })
            if (name === "alertSuccess")
                SweetAlert.fire({
                    title: 'Provide Following Details',
                    html: "<textarea style='margin-top:10px;border-radius: 0px !important;width: 100%; ' id='des' type='text' className='form-control' placeholder='Remarks'></textarea>",
                    showDenyButton: false,
                    showCancelButton: false,
                    confirmButtonText: `Save`,
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            const description = document.getElementById("des").value
                            if (description.length === 0) {
                                SweetAlert.fire('Enter description', '', 'error')
                                return false
                            } else {
                                SweetAlert.fire('Saved!', '', 'success')
                                const { date, machine_Sl_No, shift, operator_name, prosses1_result, prosses2_result, prosses3_result, prosses4_result, prosses5_result, prosses6_result, prosses7_result, prosses8_result } = this.context
                                const vaccumestatus = [prosses1_result, prosses2_result, prosses3_result, prosses4_result, prosses5_result, prosses6_result, prosses7_result, prosses8_result, results]
                                var finalstatus;
                                if (vaccumestatus.includes("No")) {
                                    finalstatus = "In Complete"
                                } else {
                                    finalstatus = "Complete"
                                }
                                const datas = {
                                    date: date,
                                    shift: shift,
                                    machine_Sl_No: machine_Sl_No,
                                    checked_by: operator_name,
                                    process1_result: prosses1_result,
                                    process2_result: prosses2_result,
                                    process3_result: prosses3_result,
                                    process4_result: prosses4_result,
                                    process5_result: prosses5_result,
                                    process6_result: prosses6_result,
                                    process7_result: prosses7_result,
                                    process8_result: prosses8_result,
                                    process9_result: results,
                                    description: description,
                                    status: finalstatus
                                }
                                axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/vaccume/send`, datas).then((res) => {
                                    if (res.data === true) {
                                        localStorage.removeItem("step1")
                                        localStorage.removeItem("step2")
                                        localStorage.removeItem("step3")
                                        localStorage.removeItem("step4")
                                        localStorage.removeItem("step5")
                                        localStorage.removeItem("step6")
                                        localStorage.removeItem("step7")
                                        localStorage.removeItem("step8")
                                    }
                                    window.location.replace("/")
                                })
                            }
                        } else if (result.isDenied) {
                            SweetAlert.fire('Changes are not saved', '', 'info')
                        }
                    })

        }
        return (
            <>
                <Steps
                    disabled={buttonStatus}
                    timer={this.state.counterTime}
                    inputField="true"
                    vacRef={this.step9Ref}
                    nameContinue="alertSuccess"
                    ContinueBtnName="OK To complete"
                    IssueBtnName="RAISE ISSUE"
                    nameIssue="alert"
                    stepTitle="Vacuum Pressure Gauge"
                    videoSrc={video1}
                    onClickContinue={(e) => Displayalert(e.target.name, "Yes")}
                    onClickIssue={(e) => Displayalert(e.target.name, "No")}
                />
            </>
        )
    }
}