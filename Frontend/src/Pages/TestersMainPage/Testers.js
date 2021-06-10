import React, { Component } from 'react'
import '../Styles/Pages.css'
import { FcPrint, FcFinePrint } from 'react-icons/fc'
import { IconContext } from "react-icons"
import { Link } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'


export default class Testers extends Component {

    render() {
        return (
            <>

                <Navbar logo="NOKIA" subTitle="Digital WorkStation" title="Testers Checklist" />
                <div className="d-flex justify-content-center align-items-center bg-primary flex-column h-100vh">
                    <div className="d-flex justify-content-center my-5">
                        <Link to="/otaform" >
                            <div className='grid-card bg-card mr-5 white fa-2x d-flex justify-content-center flex-column align-items-center'>
                                <IconContext.Provider value={{ className: "fa-5x green" }}>
                                    <FcPrint />
                                </IconContext.Provider>
                            OTA
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

