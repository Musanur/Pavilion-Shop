import React from 'react';
import { useParams } from 'react-router';
import desktopData from '../../Data/Desktop.json'
import DesktopAccessories from './DesktopAccessories';

const DesktopDetails = () => {
    const {productKey} = useParams();
    const desktop = desktopData.find(pd => pd.key === productKey) 
    return (
        <div>
            <DesktopAccessories desktop={desktop}></DesktopAccessories>
        </div>
    );
};

export default DesktopDetails;