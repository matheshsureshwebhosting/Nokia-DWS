import React, { useState } from 'react'
import SolderTable from '../Tables/SolderTable';
import VacuumTable from '../Tables/VacuumTable';
import './Dashboard.css'


function Dashboard() {
    const [solderTable, setSolderTable] = useState(false);
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
    return (
        <>
            <div className='container-fluid d-flex justify-content-center bg-light h-100vh dashboard-bg'>
                <div className='container-fluid'>
                    <div className="container-fluid d-flex justify-content-around mt-5">
                        <div className="row">
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

                            <div className="col-md-3">
                                <div className="card-counter success position-relative">
                                    <i className="fa fa-tasks"></i>
                                    <span className="count-numbers">675</span>
                                    <span className="count-name">Assessment</span>
                                    <span style={cardBottom}>TODAY</span>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card-counter info position-relative">
                                    <i className="fa fa-bar-chart"></i>
                                    <span className="count-numbers">35</span>
                                    <span className="count-name">Completed Jobs</span>
                                    <span style={cardBottom}>TODAY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex mt-5 mb-4 justify-content-center'>
                        <button className='solderbtn mr-3' onClick={() => setSolderTable(true)}>Solder Report</button>
                        <button className='vacuumbtn' onClick={() => setSolderTable(false)}>Vacuum Report</button>
                    </div>
                    {
                        solderTable ? <SolderTable /> : <VacuumTable />
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard


