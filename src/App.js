import React from 'react';
import './App.css';

import myData from './data/information.json';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
//
import NavBar from './navigation/NavBar';
import Home from './home/Home';
import Experience from './experience/Experience';
import Education from './education/Education';
import Skills from './skills/Skills';
import Contact from './contactMe/Contact';
// import Footer from './footer/Footer';

function App() {

  return (

    <BrowserRouter basename="/profil">
      <div className="App">
        <NavBar/>
          <Switch>
            <Route path="/home" exact render={ () => <Home signature={myData.signature} fullname={myData.fullname} status={myData.status} />}  />
            <Route path="/experience" exact render={ () => <Experience experienceArray={myData.experience} />}  />
            <Route path="/education" exact render={ () => <Education educationArray={myData.education} />}  />
            <Route path="/skills" exact render={ () => <Skills skillsArray={myData.skills} />}  />
            <Route path="/contact" exact render={ () => <Contact email={myData.email} social={myData.social} />}  />
            <Redirect from="/" to="/home" />
          </Switch>
        {/*<Footer/>*/}
      </div>
    </BrowserRouter>

  );
}

export default App;
