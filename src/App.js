import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} 
from "react-router-dom";
import LaptopCart from './component/Laptop/LaptopCart';
import Laptop from './component/Laptop/Laptop';
import LaptopDetails from './component/Laptop/LaptopDetails';
import Desktop from './component/Desktop/Desktop';
import DesktopDetails from './component/Desktop/DesktopDetails';
import AllInOne from './component/AllInOne/AllInOne';
import AllInOneDetails from './component/AllInOne/AllInOneDetails';
import Monitor from './component/Monitor/Monitor';
import MonitorDetails from './component/Monitor/MonitorDetails';
import Server from './component/Server/Server';
import ServerDetails from './component/Server/ServerDetails';
import Workstation from './component/Workstation/Workstation';
import WorkstationDetails from './component/Workstation/WorkstationDetails';
import Printer from './component/Printer/Printer';
import PrinterDetails from './component/Printer/PrinterDetails';
import InkToner from './component/InkToner/InkToner';
import InkTonerDetails from './component/InkToner/InkTonerDetails';
import Photocopier from './component/Photocopier/Photocopier';
import PhotocopierDetails from './component/Photocopier/PhotocopierDetails';
import Accessories from './component/Accessories/Accessories';
import AccessoriesDetails from './component/Accessories/AccessoriesDetails';
import Footer from './component/Footer/Footer';


function App() {
  return (
      <Router>
    <div className="App">
      <Switch>

          <Route path="/laptop">
            <Header/>
            <Laptop/>
            <Footer/>
          </Route>
          <Route path="/desktop">
            <Header/>
            <Desktop/>
            <Footer/>
          </Route>
          <Route path="/all-in-one">
            <Header/>
            <AllInOne/>
            <Footer/>
          </Route>
          <Route path="/monitor">
            <Header/>
            <Monitor />
            <Footer/>
            </Route>
          <Route path="/server">
            <Header/>
            <Server/>
            <Footer/>
           </Route>
          <Route path="/workstatiOn">
            <Header/>
            <Workstation/>
            <Footer/>
           </Route>
          <Route path="/printer">
            <Header/>
            <Printer/>
            <Footer/>
           </Route>
          <Route path="/ink-toner">
            <Header/>
            <InkToner/>
            <Footer/>
           </Route>
          <Route path="/photocopier">
            <Header/>
            <Photocopier/>
            <Footer/>
           </Route>
          <Route path="/accessories">
            <Header/>
            <Accessories/>
            <Footer/>
           </Route>
          <Route exact path="/">
            <Header />
            <Home /> 
            <Footer/>
          </Route>

          <Route path="/product/:productKey">
              <Header/>
              <LaptopDetails/>
              <Footer/>
          </Route>
          <Route path="/desktop/:productKey">
            <Header/>
            <DesktopDetails/>
            <Footer/>
          </Route>
          <Route path="/all-in-one/:productKey">
            <Header/>
            <AllInOneDetails/>
            <Footer/>
          </Route>
          <Route path="/monitor/:productKey">
            <Header/>
            <MonitorDetails/>
            <Footer/>
          </Route>
          <Route path="/server/:productKey">
            <Header/>
            <ServerDetails/>
            <Footer/>
          </Route>
          <Route path="/workstation/:productKey">
            <Header/>
            <WorkstationDetails/>
            <Footer/>
          </Route>
          <Route path="/printer/:productKey">
            <Header/>
            <PrinterDetails/>
            <Footer/>
          </Route>
          <Route path="/ink-toner/:productKey">
            <Header/>
            <InkTonerDetails/>
            <Footer/>
          </Route>
          <Route path="/photocopier/:productKey">
            <Header/>
            <PhotocopierDetails/>
            <Footer/>
          </Route>
          <Route path="/accessories/:productKey">
            <Header/>
            <AccessoriesDetails/>
            <Footer/>
          </Route>
        </Switch>
      
     
    </div>
      </Router> 
  );
}

export default App;
