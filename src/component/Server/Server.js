import React from 'react';
import { useEffect, useState } from 'react';
import serverData from '../../Data/Server.json'
import ServerCard from './ServerCard';

const Server = () => {
    const [server, setServer] = useState([]);
    useEffect(() => {
        setServer(serverData);
        console.log(serverData);
    }, [])
    return (
        <div>
            <div className="container pt-5">
                <h5 className="header-card">LATEST SERVER</h5>
                <div id="header_cardArea">
                    {
                        server.map(server => <ServerCard server={server} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Server;