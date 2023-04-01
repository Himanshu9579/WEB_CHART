import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/plots';


const DemoScatter = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/antfincdn/t81X1wXdoj/scatter-data.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        appendPadding: 30,
        data,
        xField: 'x',
        yField: 'y',
        colorField: 'genre',
        color: ['r(0.4, 0.3, 0.7) 0:rgba(255,255,255,0.5) 1:#5B8FF9', 'r(0.4, 0.4, 0.7) 0:rgba(255,255,255,0.5) 1:#e8a5ff'],
        sizeField: 'size',
        size: [5, 50],
        
        legend: false,
        
        shape: 'circle',
        yAxis: {
            nice: true,
            line: {
                style: {
                    stroke: '#eee',
                },
            },
        },
        xAxis: {
            grid: {
                line: {
                    style: {
                        stroke: '#eee',
                    },
                },
            },
            line: {
                style: {
                    stroke: '#eee',
                },
            },
        },
    };

    return <Scatter {...config} />;
};

export default DemoScatter;
