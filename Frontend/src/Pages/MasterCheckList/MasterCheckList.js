import React from 'react'
import '../Styles/Pages.css'

function MasterCheckList(props) {
    return (
        <>
            <div className="position-relative" style={{ height: "100vh", width: "100vw" }}>
                {props.TypeOfMedia === "Video" ? <video muted autoPlay={true} src={props.videosrc} type="video/mp4" width="100%" height="100%" className="position-relative" /> :
                    <img src={props.src} alt={props.alt} style={{ height: "95vh" }} className="w-100 position-relative" />}
                <div className="d-flex justify-content-center master-checklist-btn">
                    <button className="step-continue-btn" name={props.nameContinue} onClick={(e) => props.onClick(props.alt, "Yes", props.link)} >{props.okToComplete ? "Ok To Complete" : "Ok To Continue"}  <i className='fa fa-thumbs-up fa-2x mx-2' /></button>
                    <button className="raise-issue-btn" name={props.nameIsssue} onClick={(e) => props.onClick(props.alt, "No", props.link)} >Raise Issue<i className='fa fa-thumbs-down fa-2x mx-2' /></button>
                </div>
            </div>
        </>
    )
}

export default MasterCheckList
