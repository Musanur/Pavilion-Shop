import React from 'react';
import { useParams } from 'react-router';
import monitorData from '../../Data/Monitor.json'
import MonitorAccessories from './MonitorAccessories';

const MonitorDetails = () => {
    const {productKey} = useParams();
    const monitor = monitorData.find(pd => pd.key === productKey) 
    return (
        <div>
            <MonitorAccessories monitor={monitor}></MonitorAccessories>
        </div>
    );
};

export default MonitorDetails;