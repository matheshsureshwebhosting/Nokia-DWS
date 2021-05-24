import './App.css';
import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Sliders from './Components/Sliders/Sliders';
import SlidercontextProvider from "./Components/Context/Slidercontext"
import Step from './Components/Test/Step1';
import Step1 from './Components/Steps/Step1';
import Step2 from './Components/Steps/Step2';
import Step3 from './Components/Steps/Step3';
import Step4 from './Components/Steps/Step4';
import Step5 from './Components/Steps/Step5';
import Step6 from './Components/Steps/Step6';
import Step7 from './Components/Steps/Step7';
import Step8 from './Components/Steps/Step8';
import Step9 from './Components/Steps/Step9';
import Soldering from './Components/Soldering/Solderings';
import SolderForm from './Components/Soldering/SolderForm'
import VacuumForm from './Components/Steps/VacuumForm';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Testers from './Components/Pages/Testers';
import { Ota, Ota2, Ota3, Ota4, Ota5, Ota6, Ota7, Ota8, Ota9, Ota10 } from './Components/Testers/Ota';
import { Uwa, Uwa2, Uwa3, Uwa4, Uwa5, Uwa6, Uwa7, Uwa8, Uwa9, Uwa10 } from './Components/Testers/Uwa';
import { Spinner } from 'react-bootstrap';
import Error from './Components/Pages/Error';

const Home = React.lazy(() => import('./Components/Home/Home.jsx'));
const Dashboard = React.lazy(() => import('./Components/Dashboard/Dashboard'));
const Vaccume = React.lazy(() => import('./Components/Steps/Vaccume'))

export default class App extends Component {
  render() {
    AOS.init();
    return (
      <>
        <div className="App">
          <Router>
            <SlidercontextProvider>
              <Suspense fallback={<div className="center"><Spinner animation="border" variant="primary" /></div>}>
                <Switch>
                  {/* pages */}
                  <Route exact path="/" component={Home} />
                  <Route path='/Dashboard' render={() => (<Dashboard />)} />
                  <Route exact path="/sliders" component={Sliders} />
                  <Route path='/Soldering' render={() => (<Soldering />)} />
                  {/* ----------form--------- */}
                  <Route path='/SolderForm' component={SolderForm} />
                  <Route path='/VacuumForm' component={VacuumForm} />
                  {/* vacuum checklist Steps */}
                  <Route exact path="/test/step1" component={Step} />
                  <Route exact path="/Step1" component={Step1} />
                  <Route exact path="/Step2" component={Step2} />
                  <Route exact path="/Step3" component={Step3} />
                  <Route exact path="/Step4" component={Step4} />
                  <Route exact path="/Step5" component={Step5} />
                  <Route exact path="/Step6" component={Step6} />
                  <Route exact path="/Step7" component={Step7} />
                  <Route exact path="/Step8" component={Step8} />
                  <Route exact path="/Step9" component={Step9} />
                  <Route path="/vaccume" component={Vaccume} />
                  <Route path="/Testers" component={Testers} />
                  {/* OTA checklist */}
                  <Route path="/OTA" component={Ota} />
                  <Route path="/Ota2" component={Ota2} />
                  <Route path="/Ota3" component={Ota3} />
                  <Route path="/Ota4" component={Ota4} />
                  <Route path="/Ota5" component={Ota5} />
                  <Route path="/Ota6" component={Ota6} />
                  <Route path="/Ota7" component={Ota7} />
                  <Route path="/Ota8" component={Ota8} />
                  <Route path="/Ota9" component={Ota9} />
                  <Route path="/Ota10" component={Ota10} />
                  {/* UWS Checklist */}
                  <Route path="/UWA" component={Uwa} />
                  <Route path="/Uwa2" component={Uwa2} />
                  <Route path="/Uwa3" component={Uwa3} />
                  <Route path="/Uwa4" component={Uwa4} />
                  <Route path="/Uwa5" component={Uwa5} />
                  <Route path="/Uwa6" component={Uwa6} />
                  <Route path="/Uwa7" component={Uwa7} />
                  <Route path="/Uwa8" component={Uwa8} />
                  <Route path="/Uwa9" component={Uwa9} />
                  <Route path="/Uwa10" component={Uwa10} />
                  <Route path="*"><Error /></Route>
                </Switch>
              </Suspense>
            </SlidercontextProvider>
          </Router>
        </div>
      </>
    )
  }
}