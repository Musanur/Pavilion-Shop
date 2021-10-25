import React from 'react';
import { useEffect, useState } from 'react';
import inkTonerData from '../../Data/InkToner.json'
import InkTonerCard from './InkTonerCard';

const InkToner = () => {
    const [toner, setToner] = useState([]);
    useEffect(() => {
        setToner(inkTonerData);
        console.log(inkTonerData);
    }, [])
    return (
        <div>
            <div className="container pt-5">
                <h5 className="header-card">LATEST INK TONER</h5>
                <div id="header_cardArea">
                    {
                        toner.map(toner => <InkTonerCard toner={toner} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default InkToner;