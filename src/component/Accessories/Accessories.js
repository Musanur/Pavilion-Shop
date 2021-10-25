import React from 'react';
import { useEffect, useState } from 'react';
import accessoriesData from '../../Data/Accessories.json'
import AccessoriesCard from './AccessoriesCard';

const Accessories = () => {
     const [accessories, setAccessories] = useState([]);
    useEffect(() => {
        setAccessories(accessoriesData);
        console.log(accessoriesData);
    }, [])
    return (
        <div>
            <div className="container pt-5">
                <h5 className="header-card">LATEST accessories</h5>
                <div id="header_cardArea">
                    {
                        accessories.map(accessories => <AccessoriesCard accessories={accessories} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Accessories;