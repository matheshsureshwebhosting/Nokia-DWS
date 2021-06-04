import React from 'react'
import MasterCheckList from '../../Pages/MasterCheckList'
import video1 from '../../assets/videos/Thermalgel/1.mp4'
import video2 from '../../assets/videos/Thermalgel/2.mp4'
import video3 from '../../assets/videos/Thermalgel/3.mp4'
import video4 from '../../assets/videos/Thermalgel/4.mp4'
import video5 from '../../assets/videos/Thermalgel/5.mp4'
import video6 from '../../assets/videos/Thermalgel/6.mp4'
import video7 from '../../assets/videos/Thermalgel/7.mp4'
import video8 from '../../assets/videos/Thermalgel/8.mp4'
import video9 from '../../assets/videos/Thermalgel/9.mp4'
import video10 from '../../assets/videos/Thermalgel/10.mp4'
import video11 from '../../assets/videos/Thermalgel/11.mp4'
import video12 from '../../assets/videos/Thermalgel/12.mp4'
import video13 from '../../assets/videos/Thermalgel/13.mp4'
function Thermal() {
    return (
        <>
            <MasterCheckList TypeOfMedia="video" videosrc={video1} link='/thermal/step2' />
        </>
    )
}
function step2() {
    return (
        <>
            <MasterCheckList TypeOfMedia="video" videosrc={video2} link='/thermal/step3' />
        </>
    )
}
function step3() {
    return (
        <>
            <MasterCheckList TypeOfMedia="video" videosrc={video3} link='/thermal/step4' />
        </>
    )
}
function step4() {
    return (
        <>
            <MasterCheckList TypeOfMedia="video" videosrc={video4} link='/thermal/step5' />
        </>
    )
}
function step5() {
    return (
        <>
            <MasterCheckList TypeOfMedia="video" videosrc={video5} link='/thermal/step6' />
        </>
    )
}
function step6() {
    return (
        <>
            <MasterCheckList TypeOfMedia="video" videosrc={video6} link='/thermal/step7' />
        </>
    )
}
function step7() {
    return (
        <>
            <MasterCheckList TypeOfMedia="video" videosrc={video7} link='/thermal/step8' />
        </>
    )
}
function step8() {
    return (
        <>
            <MasterCheckList TypeOfMedia="video" videosrc={video8} link='/thermal/step9' />
        </>
    )
}
function step9() {
    return (
        <>
            <MasterCheckList TypeOfMedia="video" videosrc={video9} link='/thermal/step10' />
        </>
    )
}
function step10() {
    return (
        <>
            <MasterCheckList TypeOfMedia="video" videosrc={video10} link='/thermal/step11' />
        </>
    )
}
function step11() {
    return (
        <>
            <MasterCheckList TypeOfMedia="video" videosrc={video11} link='/thermal/step12' />
        </>
    )
}
function step12() {
    return (
        <>
            <MasterCheckList TypeOfMedia="video" videosrc={video12} link='/thermal/step13' />
        </>
    )
}
function step13() {
    return (
        <>
            <MasterCheckList TypeOfMedia="video" videosrc={video13} link='/' />
        </>
    )
}
export { Thermal, step10, step11, step12, step13, step2, step3, step4, step5, step6, step7, step8, step9 }
