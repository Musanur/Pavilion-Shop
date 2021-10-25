import React from 'react';
import { useParams } from 'react-router';
import serverData from '../../Data/Server.json'
import ServerAccessories from './ServerAccessories';


const ServerDetails = () => {
    const {productKey} = useParams();
    const server = serverData.find(pd => pd.key === productKey) 
    return (
        <div>
            <ServerAccessories server={server}></ServerAccessories>
        </div>
    );
};

export default ServerDetails;