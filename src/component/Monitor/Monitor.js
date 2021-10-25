import React from 'react';
import { useEffect, useState } from 'react';
import monitorData from '../../Data/Monitor.json'
import MonitorCard from './MonitorCard';

const Monitor = () => {
    const [monitor, setMonitor] = useState([]);
    useEffect(() => {
        setMonitor(monitorData);
        console.log(monitorData);
    }, [])
    return (
        <div>
            <div className="container pt-5">
                <h5 className="header-card">LATEST MONITOR</h5>
                <div id="header_cardArea">
                    {
                        monitor.map(monitor => <MonitorCard monitor={monitor} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Monitor;