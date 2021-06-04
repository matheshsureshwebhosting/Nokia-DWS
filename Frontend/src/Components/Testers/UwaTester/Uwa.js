import React from 'react'
import MasterCheckList from '../../../Pages/MasterCheckList/MasterCheckList'
import { useHistory } from 'react-router'
import SweetAlert from "sweetalert2";
import axios from 'axios';
const uwastatus = {}
var uwaform;
function Uwa(props) {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        const { testerform } = props.location.state
        uwaform = testerform
        if (uwaform === undefined) {
            return history.push("/testerform")
        }
        if (status === "yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList src="./Images/Uwa/1.webp" alt="Uwa" onClick={onClick} buttonName="Next" link="/Uwa2" />
        </>
    )
}
function Uwa2() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/testerform")
        }
        if (status === "yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })

    }
    return (
        <>
            <MasterCheckList src="./Images/Uwa/2.webp" onClick={onClick} alt="Uwa2" buttonName="Next" link="/Uwa3" />
        </>
    )

}
function Uwa3() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/testerform")
        }
        if (status === "yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })

    }
    return (

        <>
            <MasterCheckList src="./Images/Uwa/3.webp" onClick={onClick} alt="Uwa3" buttonName="Next" link="/Uwa4" />
        </>
    )
}
function Uwa4() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/testerform")
        }
        if (status === "yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })

    }
    return (
        <>
            <MasterCheckList src="./Images/Uwa/4.webp" onClick={onClick} alt="Uwa4" buttonName="Next" link="/Uwa5" />
        </>
    )

}
function Uwa5() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/testerform")
        }
        if (status === "yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })

    }
    return (
        <>
            <MasterCheckList src="./Images/Uwa/5.webp" onClick={onClick} alt="Uwa5" buttonName="Next" link="/Uwa6" />
        </>
    )
}
function Uwa6() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/testerform")
        }
        if (status === "yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList src="./Images/Uwa/6.webp" onClick={onClick} alt="Uwa6" buttonName="Next" link="/Uwa7" />
        </>
    )
}
function Uwa7() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/testerform")
        }
        if (status === "yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })

    }
    return (
        <>
            <MasterCheckList src="./Images/Uwa/7.webp" onClick={onClick} alt="Uwa7" buttonName="Next" link="/Uwa8" />
        </>
    )
}
function Uwa8() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/testerform")
        }
        if (status === "yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList src="./Images/Uwa/8.webp" onClick={onClick} alt="Uwa8" buttonName="Next" link="/Uwa9" />
        </>
    )
}
function Uwa9() {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/testerform")
        }
        if (status === "yes")
            SweetAlert.fire({
                title: "Good job!",
                text: "Thank You!",
                icon: "success",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
        if (status === "No")
            SweetAlert.fire({
                title: "OK Noted",
                text: "Please Inform Technician!",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed) {
                    uwastatus[form] = status
                    history.push(nextPath)
                }
            })
    }
    return (
        <>
            <MasterCheckList src="./Images/Uwa/9.webp" onClick={onClick} alt="Uwa9" buttonName="Next" link="/Uwa10" />
        </>
    )
}
function Uwa10(props) {
    const history = useHistory()
    const onClick = (form, status, nextPath) => {
        if (uwaform === undefined) {
            return history.push("/testerform")
        }
        SweetAlert.fire({
            title: 'Provide Following Details',
            html: "<textarea style='margin-top:10px;border-radius: 0px !important;width: 100%; ' id='des' type='text' className='form-control' placeholder='Remarks'></textarea>",
            showDenyButton: false,
            showCancelButton: false,
            confirmButtonText: `Save`,
        }).then((result) => {
            if (result.isConfirmed) {
                const description = document.getElementById("des").value
                if (description.length === 0) {
                    SweetAlert.fire('Enter description', '', 'error')
                    return false
                } else {

                    var finalstatus;
                    if (Object.values(uwastatus).includes("No")) {
                        finalstatus = "In Complete"
                    } else {
                        finalstatus = "Complete"
                    }
                    const datas = {
                        date: uwaform.date,
                        station: uwaform.Station,
                        operator_name: uwaform.operator_name,
                        shift: uwaform.shift,
                        uwa1: uwastatus.Uwa,
                        uwa2: uwastatus.Uwa2,
                        uwa3: uwastatus.Uwa3,
                        uwa4: uwastatus.Uwa4,
                        uwa5: uwastatus.Uwa5,
                        uwa6: uwastatus.Uwa6,
                        uwa7: uwastatus.Uwa7,
                        uwa8: uwastatus.Uwa8,
                        uwa9: uwastatus.Uwa9,
                        uwa10: status,
                        description: description,
                        status: finalstatus
                    }
                    axios.post(`${process.env.REACT_APP_SERVER_ORIGIN}/uwa/send`, datas).then((res) => {
                        if (res.data === true) {
                            history.push(nextPath)
                        }
                    }).catch((error) => {
                        console.log(error)
                    })

                }
            }
        })
    }
    return (
        <>
            <MasterCheckList okToComplete="true" src="./Images/Uwa/10.webp" onClick={onClick} alt="Uwa10" buttonName="Done" link="/" />
        </>
    )
}
export { Uwa, Uwa2, Uwa3, Uwa4, Uwa5, Uwa6, Uwa7, Uwa8, Uwa9, Uwa10 }
