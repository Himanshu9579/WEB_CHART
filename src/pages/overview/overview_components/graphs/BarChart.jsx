// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { TinyColumn } from '@ant-design/plots';

const DemoColumn = () => {
    const data = [274, 337, 81, 497, 466, 219, 269, 45, 78, 96, 67, 87, 300, 96, 286, 340, 250, 300, 205, 250, 337, 81, 397, 366, 219, 269, 45, 78, 96, 67, 87, 300, 96, 286, 340, 250, 350, 205, 450, 269, 45, 78, 96, 67, 87, 300, 96, 286, 440, 250, 96, 67, 87, 300, 96, 286, 540, 250, 400, 205, 350, 269, 45, 78, 81, 497, 466, 219, 269];
    const config = {
        height: 45,
        autoFit: true,
        data,
        tooltip: {
            customContent: function (x, data) {
                return `NO.${x}: ${data[0]?.data?.y.toFixed(2)}`;
            },
        },
        pattern: {
            type: 'line',
        },
    };
    return <TinyColumn {...config} />;
};

export default DemoColumn;