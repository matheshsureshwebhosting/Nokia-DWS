import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
export const Slidercontext = React.createContext()

export default function SlidercontextProvider(props) {
    const history = useHistory()
    const [enabled, enabledchange] = useState(["step1"])
    const [vacuume, setvaccume] = useState({})
    const [activestep,seactivestep]=useState(0)
    function sliderenable(e, step) {
        const active=step.charAt(4)
        seactivestep(active)
        const enabledArray = enabled
        enabledArray.push(step)
        enabledchange(enabledArray)        
        history.push(`/vaccume`)
    }
    const updateVaccume = (vaccume) => {        
        setvaccume(vaccume)
    }
    return (
        <div>
            <Slidercontext.Provider value={{
                enabled,
                sliderenable: sliderenable,
                updateVaccume: updateVaccume,
                activestep:activestep,
                vacuume:vacuume
            }}>
                {props.children}
            </Slidercontext.Provider>
        </div>
    )
}
