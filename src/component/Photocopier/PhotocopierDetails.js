import React from 'react';
import { useParams } from 'react-router';
import photocopierData from '../../Data/Photocopier.json'
import PhotocopierAccessories from './PhotocopierAccessories';

const PhotocopierDetails = () => {
     const {productKey} = useParams();
    const photocopier = photocopierData.find(pd => pd.key === productKey) 
    return (
        <div>
            <PhotocopierAccessories photocopier={photocopier}></PhotocopierAccessories>
        </div>

    );
};

export default PhotocopierDetails;