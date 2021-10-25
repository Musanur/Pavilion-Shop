import React from 'react';
import { useParams } from 'react-router';
import AllInOneData from '../../Data/AllInOne.json';
import AllInOneAccessories from './AllInOneAccessories';

const AllInOneDetails = () => {
     const {productKey} = useParams();
    const allInOne = AllInOneData.find(pd => pd.key === productKey) 
    return (
        <div>
            <AllInOneAccessories allInOne={allInOne}></AllInOneAccessories>
        </div>
    );
};

export default AllInOneDetails;