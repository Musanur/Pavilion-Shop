import React from 'react';
import { useParams } from 'react-router';
import laptopData from '../../Data/Laptop.json'
import LaptopAccessories from './LaptopAccessories';

const LaptopDetails = () => {
    const {productKey} = useParams();
    const laptop = laptopData.find(pd => pd.key === productKey) 
    return (
        <div>
            <LaptopAccessories laptop={laptop}></LaptopAccessories>
        </div>
    );
};

export default LaptopDetails;