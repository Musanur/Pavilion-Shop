import React from 'react';
import { useParams } from 'react-router';
import accessoriesData from '../../Data/Accessories.json'
import AccessoriesAll from './AccessoriesAll';

const AccessoriesDetails = () => {
    const {productKey} = useParams();
    const accessories = accessoriesData.find(pd => pd.key === productKey) 
    return (
        <div>
            <AccessoriesAll accessories={accessories}></AccessoriesAll>
        </div>

    );
};

export default AccessoriesDetails;