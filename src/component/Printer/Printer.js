import React from 'react';
import { useEffect, useState } from 'react';
import printerData from '../../Data/Printer.json'
import PrinterCard from './PrinterCard';

const Printer = () => {
     const [printer, setPrinter] = useState([]);
    useEffect(() => {
        setPrinter(printerData);
        console.log(printerData);
    }, [])
    return (
        <div>
            <div className="container pt-5">
                <h5 className="header-card">LATEST PRINTER</h5>
                <div id="header_cardArea">
                    {
                        printer.map(printer => <PrinterCard printer={printer} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Printer;