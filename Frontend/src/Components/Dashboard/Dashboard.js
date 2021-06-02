import React, { useState } from 'react'
import { Accordion, Card } from 'react-bootstrap';
import SolderTable from '../Tables/SolderTable';
import VacuumTable from '../Tables/VacuumTable';
import './Dashboard.css'
import { AiOutlineDashboard, AiOutlineDownload } from 'react-icons/ai'
import { FiChevronDown } from 'react-icons/fi'
import { FcDataSheet } from 'react-icons/fc'
import ReportTable from '../Tables/ReportTable/ReportTable';
import { Link } from 'react-router-dom'

function Dashboard() {
    const [solderTable, setSolderTable] = useState(false);
    const [otaTable, setOtaTable] = useState(false);
    const [vacTab, setVacTab] = useState(false)
    const cardBottom = {
        position: "absolute",
        background: "rgba(255,255,255,0.25)",
        width: "100%",
        left: "0",
        bottom: "0",
        height: "30px",
        textAlign: "left",
        paddingLeft: "12px", paddingTop: "3px"
    }
    const showOta = () => {
        setOtaTable(true)
        setVacTab(false)
        setSolderTable(false)
    }
    const showSol = () => {
        setSolderTable(true)
        setVacTab(false)
        setOtaTable(false)
    }
    const showVac = () => {
        setVacTab(true)
        setOtaTable(false)
        setSolderTable(false)
    }
    return (
        <>
            <div className='bg-light dashboard-container'>
                <div className='dashbord-wrap col-2'>
                    <Link to="/"> <div className='dashboard-logo border-bottom'>NOKIA</div></Link>
                    <div className='dashboard-menu-list'><AiOutlineDashboard className='dashboard-icons' /> Dashboard</div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Toggle as={Card.Header} eventKey="1" className='dashboard-menu-list'>
                            <AiOutlineDownload className='dashboard-icons' />Reports<FiChevronDown className='accordion-menu-down-arrow' />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <ul className='dashboard-accordion-submenu'>
                                <li onClick={showOta}>Solder tip temperature</li>
                                <li >vacuum lifter</li>
                                <li>OTA</li>
                                <li>UWA</li>
                                <li>PWA</li>
                            </ul>
                        </Accordion.Collapse>
                        <Accordion.Toggle as={Card.Header} eventKey="0" className='dashboard-menu-list'>
                            <FcDataSheet className='dashboard-icons' />Tables  <FiChevronDown className='accordion-menu-down-arrow' />
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <ul className='dashboard-accordion-submenu'>
                                <li onClick={showSol}>Solder tip temperature</li>
                                <li onClick={showVac}>vacuum lifter</li>
                                <li>OTA</li>
                                <li>UWA</li>
                                <li>PWA</li>
                            </ul>
                        </Accordion.Collapse>
                    </Accordion>
                </div>
                <div className="dashboard-section col-10">
                    <div className="d-flex justify-content-center mt-4">
                        <div className="col-md-3">
                            <div className="card-counter primary position-relative">
                                <i className="fa fa-code-fork"></i>
                                <span className="count-numbers">12</span>
                                <span className="count-name">Checklists</span>
                                <span style={cardBottom}>TODAY</span>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card-counter danger position-relative">
                                <i className="fa fa-spin fa-cog"></i>
                                <span className="count-numbers">599</span>
                                <span className="count-name">Processes</span>
                                <span style={cardBottom}>TODAY</span>
                            </div>
                        </div>

                        {/* <div className="col-md-3">
                            <div className="card-counter success position-relative">
                                <i className="fa fa-tasks"></i>
                                <span className="count-numbers">675</span>
                                <span className="count-name">Assessment</span>
                                <span style={cardBottom}>TODAY</span>
                            </div>
                        </div> */}

                        <div className="col-md-3">
                            <div className="card-counter info position-relative">
                                <i className="fa fa-bar-chart"></i>
                                <span className="count-numbers">35</span>
                                <span className="count-name">Completed Jobs</span>
                                <span style={cardBottom}>TODAY</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        {
                            otaTable ? <ReportTable /> : null
                        }
                    </div>

                    <div className="mt-5">
                        {
                            solderTable ? <SolderTable /> : vacTab ? <VacuumTable /> : null
                        }
                    </div>
                    {/* <div className='d-flex mt-5 mb-4 justify-content-center'>
                        <button className='solderbtn mr-3' onClick={() => setSolderTable(true)}>Solder Report</button>
                        <button className='vacuumbtn' onClick={() => setSolderTable(false)}>Vacuum Report</button>
                    </div><div className='d-flex mt-5 mb-4 justify-content-center'>
                        <button className='solderbtn mr-3' onClick={() => setSolderTable(true)}>Solder Report</button>
                        <button className='vacuumbtn' onClick={() => setSolderTable(false)}>Vacuum Report</button>
                    </div>
                    {
                        solderTable ? <SolderTable /> : <VacuumTable />
                    } */}
                </div>

            </div>
        </>
    )
}

export default Dashboard


