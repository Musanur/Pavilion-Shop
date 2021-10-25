import React from 'react';
import { useParams } from 'react-router';
import printerData from '../../Data/Printer.json'
import PrinterAccessories from './PrinterAccessories';

const PrinterDetails = () => {
     const {productKey} = useParams();
    const printer = printerData.find(pd => pd.key === productKey) 
    return (
        <div>
            <PrinterAccessories printer={printer}></PrinterAccessories>
        </div>

    );
};

export default PrinterDetails;