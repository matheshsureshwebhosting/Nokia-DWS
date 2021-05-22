import React, { Component, Fragment } from 'react'
import { Slidercontext } from "../Context/Slidercontext"
import video1 from "../../assets/videos/vacclift/3.mp4"
import "./step.css"
import SweetAlert from "sweetalert2";
import SubmitButton from "../Utilities/Buttons/SubmitButton";


export default class Step3 extends Component {
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
            if (name === "alertSuccess") {
                SweetAlert.fire({
                    title: "Good job!",
                    text: "Thank You!",
                    icon: "success",
                }).then((result) => {
                    if (result.isConfirmed) {
                        // localStorage.setItem("prosses3_status", paymentType)
                        localStorage.setItem("prosses3_result", results)
                        localStorage.setItem("step3", "okay")
                        sliderenable(this, "step4")
                    }
                })
            }
        }
        return (
            <Fragment>
                <div className='h-100vh d-flex justify-content-center flex-column bg-primary container-fluid px-5'>
                    <div>
                        {/* <h5 className="text-center heading"><span className="condition">Standard Conditions:</span>Dirt Free and handle should be clamped perfectly, No Leakages</h5> */}
                        <div className="content justify-content-between d-flex">
                            <div className="col-md-9">
                                <h2 className="text-center step-title heading">Vacuum Barrel and Joints Cleaning And Inspection</h2>
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
            </Fragment >
        )
    }
}