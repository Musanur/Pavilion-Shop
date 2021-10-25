import React from 'react';
import LaptopCart from './LaptopCart';
import { useEffect, useState } from 'react';
import laptopData from '../../Data/Laptop.json';

const Laptop = () => {
    const [laptop, setLaptop] = useState([]);
    useEffect(() => {
        setLaptop(laptopData);
        console.log(laptopData);
    }, [])
    return (
        <div>
            <div className="container pt-5">
                <h5 className="header-card">LATEST LAPTOPS</h5>
                <div id="header_cardArea">
                    {
                        laptop.map(laptop => <LaptopCart laptop={laptop} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Laptop;