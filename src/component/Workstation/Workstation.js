import React from 'react';
import { useEffect, useState } from 'react';
import workstationData from '../../Data/WorkStation.json'
import WorkstationCard from './WorkstationCard';
const Workstation = () => {
     const [workstation, setWorkstation] = useState([]);
    useEffect(() => {
        setWorkstation(workstationData);
        console.log(workstationData);
    }, [])
    return (
        <div>
            <div className="container pt-5">
                <h5 className="header-card">LATEST SERVER</h5>
                <div id="header_cardArea">
                    {
                        workstation.map(workstation => <WorkstationCard workstation={workstation} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Workstation;