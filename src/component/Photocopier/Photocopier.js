import React from 'react';
import { useEffect, useState } from 'react';
import photocopierData from '../../Data/Photocopier.json'
import PhotocopierCard from './PhotocopierCard';

const Photocopier = () => {
    const [photocopier, setPhotocopier] = useState([]);
    useEffect(() => {
        setPhotocopier(photocopierData);
        console.log(photocopierData);
    }, [])
    return (
        <div>
            <div className="container pt-5">
                <h5 className="header-card">LATEST PHOTOCOPIER</h5>
                <div id="header_cardArea">
                    {
                        photocopier.map(photocopier => <PhotocopierCard photocopier={photocopier} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Photocopier;