import React from 'react';
import { useEffect, useState } from 'react';
import desktopData from '../../Data/Desktop.json';
import DesktopCard from './DesktopCard';

const Desktop = () => {
    const [desktop, setDesktop] = useState([]);
    useEffect(() => {
        setDesktop(desktopData);
        console.log(desktopData);
    }, [])
    return (
        <div>
            <div className="container pt-5">
                <h5 className="header-card">LATEST DESKTOP</h5>
                <div id="header_cardArea">
                    {
                        desktop.map(desktop => <DesktopCard desktop={desktop} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Desktop;