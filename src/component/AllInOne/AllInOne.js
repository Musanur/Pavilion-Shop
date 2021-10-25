import React from 'react';
import { useEffect, useState } from 'react';
import AllInOneData from '../../Data/AllInOne.json';
import AllInOneCard from './AllInOneCard';

const AllInOne = () => {
      const [ allInOne, setAllInOne] = useState([]);
        useEffect(() => {
            setAllInOne(AllInOneData);
            console.log(AllInOneData);
        }, [])
        return (
            <div>
                <div className="container pt-5">
                    <h5 className="header-card">LATEST ALL IN ONE</h5>
                    <div id="header_cardArea">
                        {
                            allInOne.map(allInOne => <AllInOneCard allInOne={allInOne} />)
                        }
                    </div>
                </div>
            </div>
    );
};

export default AllInOne;