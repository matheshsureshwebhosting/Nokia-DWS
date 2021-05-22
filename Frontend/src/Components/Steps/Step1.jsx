import React, { Component } from 'react'
import "./step.css"
import video1 from "../../assets/videos/vacclift/1.mp4"
import SubmitButton from "../Utilities/Buttons/SubmitButton";
import SweetAlert from "sweetalert2";
import { Slidercontext } from "../Context/Slidercontext"
export default class Step1 extends Component {
    static contextType = Slidercontext
    constructor(props) {
        super()
        this.state = {
            machine_name: "",
            machine_Sl_No: "",
            operator_name: "",
            shift: "",
            paymentType: "",
            shifta: false,
            shiftb: false,
            shiftc: false,
        }
    }
    componentDidMount = () => {
        var today = new Date();
        const hours = today.getHours() + ":" + today.getMinutes()
        console.log(hours)
        if (hours < "14:30") {
            this.setState({
                shifta: true
            })
        } else if (hours > "14.30" && hours < "22.30") {
            this.setState({
                shiftb: true
            })
        } else {
            this.setState({
                shiftc: true
            })
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        const { sliderenable, updateVaccume } = this.context
        const Displayalert = (name, results) => {
            console.log(results, name)
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                const { machine_name, machine_Sl_No, operator_name, shift } = this.state
                if (result.isConfirmed) {
                    updateVaccume({
                        date: dateTime,
                        machine_name: machine_name,
                        machine_Sl_No: machine_Sl_No,
                        operator_name: operator_name,
                        shift: shift
                    })
                    console.log('Setting Local Storage')
                    // localStorage.setItem("prosses1_status", paymentType)
                    localStorage.setItem("prosses1_result", results)
                    localStorage.setItem("step1", "okay")
                    sliderenable(this, "step2")
                }
            })
        }

        return (
            <>
                <div className='bg-primary d-flex justify-content-center flex-column h-100vh container-fluid px-5 position-fixed'>
                    <div>
                        <div className="content d-flex">
                            <div className="col-9 animation mr-3">
                                <h2 className="text-center heading step-title">Lifting Handle and Pad Cleaning</h2>
                                <video muted autoPlay={true} loop src={video1} type="video/mp4" width="100%" height="100%" />
                            </div>
                            <div className="col-md-3  py-4 glassCard formCard my-auto ml-3">
                                <div className="card-body">
                                    <h4 className="process text-uppercase white">Complete ?</h4>
                                    <div className="text-center  mt-4">
                                        <SubmitButton  name="alertSuccess" buttonName="Submit"
                                            onClick={(e) => Displayalert(e.target.name, "Yes")}></SubmitButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
