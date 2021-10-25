import React from 'react';
import { useParams } from 'react-router';
import inkTonerData from '../../Data/InkToner.json'
import InkTonerAccessories from './InkTonerAccessories';


const InkTonerDetails = () => {
      const {productKey} = useParams();
    const toner = inkTonerData.find(pd => pd.key === productKey) 
    return (
        <div>
            <InkTonerAccessories toner={toner}></InkTonerAccessories>
        </div>

    );
};

export default InkTonerDetails;