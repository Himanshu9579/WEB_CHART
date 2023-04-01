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
        color: ['r(0.4, 0.3, 0.7) 0:#958bfd', 'r(0.4, 0.4, 0.7) 0:#ff737d'],
        // color: ['r(0.4, 0.3, 0.7) 0:rgba(255,255,255,0.5) 1:#695DFB', 'r(0.4, 0.4, 0.7) 0:rgba(255,255,255,0.5) 1:#ff737d'],
        sizeField: 'size',
        size: [8, 40],

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
