import React from 'react';
import { useParams } from 'react-router';
import workstationData from '../../Data/WorkStation.json'
import WorkstationAccessories from './WorkstationAccessories';

const WorkstationDetails = () => {
      const {productKey} = useParams();
    const workstation = workstationData.find(pd => pd.key === productKey) 
    return (
        <div>
            <WorkstationAccessories workstation={workstation}></WorkstationAccessories>
        </div>
    );
};

export default WorkstationDetails;