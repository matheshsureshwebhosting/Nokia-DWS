import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'

function MasterCheckList(props) {
    return (
        <>
            <div className="position-relative" style={{ height: "100vh", width: "100vw" }}>
                <video muted autoPlay={true} loop src={props.videosrc} type="video/mp4" width="100%" height="100%" className="position-relative" />
                <img src={props.src} alt={props.alt} className="w-100 h-100" />
                <Link to={props.link}>
                    <div className="d-flex justify-content-center master-checklist-btn">
                        <button className="step-continue-btn" name={props.name} onClick={props.onClick} > Ok To Continue <i className='fa fa-thumbs-up fa-2x mx-2' /></button>
                        <button className="raise-issue-btn" name={props.name} onClick={props.onClick} >Raise Issue<i className='fa fa-thumbs-down fa-2x mx-2' /></button>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default MasterCheckList
