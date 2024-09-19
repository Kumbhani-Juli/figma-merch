import React from 'react';
import '../assets/css/tshirtSizeGuide.css';

const TshirtSizeGuide = () => {
    const rowData = [
        {
            size: "S",
            bodyLength: '26 3/5"',
            chestWidth: '18 1/4"'
        },
        {
            size: "M",
            bodyLength: '28"',
            chestWidth: '20 1/4"'
        },
        {
            size: "L",
            bodyLength: '29 2/5"',
            chestWidth: '22"'
        },
        {
            size: "XL",
            bodyLength: '30 3/4"',
            chestWidth: '24"'
        },
        {
            size: "2XL",
            bodyLength: '31 3/5"',
            chestWidth: '26"'
        },
    ]
    return (
        <>
            <div className='tshirt-size-guid-section-container'>
                <div className='tshirt-size-guid-section-title'>
                    <h3>T-Shirt Size Guide</h3>
                </div>
                <div className='tshirt-size-guide-table'>
                    <div className='table-header'>
                        <div className='table-cell'>Size</div>
                        <div className='table-cell'>Body Length</div>
                        <div className='table-cell'>Chest Width (Laid Flat)</div>
                    </div>
                    {
                        rowData?.map((data, index) => (
                            <div className='table-row' key={index}>
                                <div className='table-cell'>{data?.size}</div>
                                <div className='table-cell'>{data?.bodyLength}</div>
                                <div className='table-cell'>{data?.chestWidth}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default TshirtSizeGuide;
