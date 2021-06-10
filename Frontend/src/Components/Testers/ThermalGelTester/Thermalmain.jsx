import React, { Component } from 'react'
import '../../../Pages/Styles/Pages.css'
import { FcPrint, FcFinePrint } from 'react-icons/fc'
import { IconContext } from "react-icons"
import { Link } from 'react-router-dom'
import { Navbar } from '../../Navbar/Navbar'

export default class Thermalmain extends Component {
    render() {
        return (
            <>
                {/* Navbar */}
                <Navbar logo="NOKIA" subTitle="Digital WorkStation" title="Thermal Gel Machine Checklist" />

                {/* Grid Menu Cards */}
                <div className="d-flex justify-content-center align-items-center bg-primary flex-column h-100vh">
                    <div className="d-flex justify-content-center my-5">
                        <Link to="/thermalform" >
                            <div className='grid-card bg-card mr-5 white fa-2x d-flex justify-content-center flex-column align-items-center'>
                                <IconContext.Provider value={{ className: "fa-5x green" }}>
                                    <FcPrint />
                                </IconContext.Provider>
                                    PVA
                            </div>
                        </Link>
                        <Link to="/uwaform" >
                            <div className='grid-card bg-card white  fa-2x d-flex justify-content-center flex-column align-items-center'>
                                <IconContext.Provider value={{ className: "fa-5x green" }}>
                                    <FcFinePrint />
                                </IconContext.Provider>
                                    UWA
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}
