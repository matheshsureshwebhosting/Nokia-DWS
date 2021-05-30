import React, { Component } from 'react'
import "./step.css"
import video1 from "../../assets/videos/vacclift/1.mp4"
import SweetAlert from "sweetalert2";
import { Slidercontext } from "../Context/Slidercontext"
import Steps from './Steps';
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
                    this.props.history.push("/step2")
                }
            })
        }

        return (
            <>
                <Steps
                stepTitle="Lifting Handle and Pad Cleaning"
                videoSrc={video1}
                onClickContinue={(e) => Displayalert(e.target.name, "Yes")}
                onClickIssue={(e)=>Displayalert(e.target.name,"No")}
                />
            </>
        )
    }
}
