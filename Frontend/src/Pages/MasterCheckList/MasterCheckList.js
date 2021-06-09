import React from 'react'
import '../Styles/Pages.css'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
function MasterCheckList(props) {
    return (
        <>
            <div className="position-relative" style={{ height: "100vh", width: "100vw" }}>
                {/* <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: `${props.bar}` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{props.bar}</div>
                </div> */}

                {/* PROGRESS CIRCLE */}
                {props.progressCircle === "true" && <div className='prg-div'>
                    <CircularProgressbarWithChildren className='progres-circle' value={props.progressValue}
                        background
                        backgroundPadding={5}
                        styles={buildStyles({
                            backgroundColor: "#124191",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}>
                        <div clasName="prgtext" style={{ textAlign: "center", color: "white" }}>
                            <div style={{ fontSize: "1.5rem", fontWeight: "500" }}>STEP</div>
                            <div style={{ fontSize: "1rem" }}>{props.progressText}</div>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                }

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
