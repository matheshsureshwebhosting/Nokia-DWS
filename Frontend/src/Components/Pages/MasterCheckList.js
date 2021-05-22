import React from 'react'
import { Link } from 'react-router-dom'
import './Pages.css'
import SubmitButton from '../Utilities/Buttons/SubmitButton'

function MasterCheckList(props) {
    return (
        <>
            <div className="position-relative" style={{ height: "100vh", width: "100vw" }}>
                <img src={props.src} alt={props.alt} className="w-100 h-100" />
                <Link to={props.link}>
                    <div className="test-checklist-btn"><SubmitButton buttonName={props.buttonName} /></div>
                </Link>
            </div>
        </>
    )
}

export default MasterCheckList
