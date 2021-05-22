import React from 'react'
import solderImg from "../../assets/img/home/solder.png"
import vacuumImg from "../../assets/img/home/jumbo-structure.png"
import gel from '../../assets/img/home/gel.png';
import packing from '../../assets/img/home/packing.png';
import robot from '../../assets/img/home/robot.png';
import testers from '../../assets/img/home/testers.png';
import { Link } from 'react-router-dom'
import './Homes.css'
import {Navbar} from '../Navbar/Navbar'
import TitleButton from '../Utilities/Buttons/TitleButton';
import dashboardIcon from "../../assets/img/home/app-store.svg";
function Home(props) {
  const data = [
    {
      img: vacuumImg,
      link: "/VacuumForm",
      alt: "Vacuum-img",
      animation:"fade-down-right"
    },
    {
      img: packing,
      alt: 'packaginf-img',
      animation:"fade-down"
    },
    {
      img: robot,
      alt: "robot-img",
      animation:"fade-down-left"
    },
    {
      img: solderImg,
      alt: "solderImg",
      link: "/SolderForm",
      animation:"fade-up-right"
    },
    {
      img: gel,
      alt: "gel-img",
      animation:"fade-up"
    },
    {
      img: testers,
      alt: "testers-img",
      link: "/Testers",
      animation:"fade-up-left"
    }
  ]

  return (
    <>
      <Navbar logo="NOKIA" title="Digital Work Station Final Assembly" src={dashboardIcon} alt=""/>
      <div className='container h-90 d-flex justify-content-center flex-column align-items-center'>
        <TitleButton >Autonomous Maintenance Check List</TitleButton>
        <div className="mt-3 d-flex justify-content-center flex-wrap" style={{ maxWidth: "1366px" }}>
          {
            (data.map((value, index) => (
              <div key={index} className='grid-card m-2' data-aos-duration="3000" data-aos={value.animation}>
                <Link to={value.link}>
                  <img className='w-100 h-100' src={value.img} alt={value.alt} />
                </Link>
              </div>
            )))
          }
        </div>
      </div>
    </>
  )
}

export default Home
//  <div className='d-flex justify-content-center flex-column align-items-center w-100 bg-primary overflow-hidden' style={{ height: "100vh" }}>
//         <h2 data-aos-duration="2000" data-aos="zoom-in" className="white p-3 heading">Digital WorkStation</h2>
//         <Link to='/dashboard'><i class="fa fa-database dashboard-icon"></i></Link>
//         <div style={{ height: "80vh", width: "75%" }}>
//           <div className='h-50 d-flex justify-content-around py-2'>

//             <div data-aos-duration="3000" data-aos="fade-down-right" className='glassCard d-flex flex-column justify-content-center align-items-center text-center zoom' style={{ height: "100%", width: "28%" }}>
//               <Link to='/SolderForm'>
//                 <img src={solderImg} alt='solderImg' className="" loading="lazy" style={{ height: "90%", width: "70%" }} />
//               </Link>
//               <span className='home-card-title'>Soldering Tip Temperature <br />Measurement</span>
//             </div>

//             <div data-aos-duration="3000" data-aos="fade-down" className='glassCard d-flex flex-column justify-content-center align-items-center text-center zoom' style={{ height: "100%", width: "28%" }}>
//               <Link to='/vacuumform'>
//                 <img src={vacuumImg} alt='solderImg' className="" loading="lazy" style={{ height: "90%", width: "70%" }} />
//               </Link>
//               <span className='home-card-title'>Vacuum Lifter Daily Maintenance Checklist</span>
//             </div>

//             <div data-aos-duration="3000" data-aos="fade-down-left" className='glassCard zoom text-center heading d-flex flex-column justify-content-center align-items-center' style={{ height: "100%", width: "28%" }}>
//               <span className='home-card-title p-3'> Checklist 3</span>
//             </div>
//           </div>

//           <div className='h-50 d-flex justify-content-around py-3'>

//             <div data-aos-duration="3000" data-aos="fade-up-right" className='glassCard zoom text-center heading d-flex flex-column justify-content-center align-items-center' style={{ height: "100%", width: "28%" }}>
//               <span className='home-card-title p-3'> Checklist 4</span>
//             </div>
//             <div data-aos-duration="3000" data-aos="fade-up" className='glassCard zoom text-center heading d-flex flex-column justify-content-center align-items-center' style={{ height: "100%", width: "28%" }}>
//               <span className='home-card-title p-3'> Checklist 5</span>
//             </div>
//             <div data-aos-duration="3000" data-aos="fade-up-left" className='glassCard zoom text-center heading d-flex flex-column justify-content-center align-items-center' style={{ height: "100%", width: "28%" }}>
//               <span className='home-card-title p-3'> Checklist 6</span>
//             </div>

//           </div>
//         </div>
//       </div> 