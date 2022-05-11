import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css'





const Chart = () => {


    const data = [
        {
            name: 'Jan',
            'Active User': 4000,

        },
        {
            name: 'Feb',
            'Active User': 3000,

        },
        {
            name: 'March',
            'Active User': 2000,

        },
        {
            name: 'Apr',
            'Active User': 2780,

        },
        {
            name: 'May',
            'Active User': 1890,

        },
        {
            name: 'June',
            'Active User': 2390,

        },
        {
            name: 'July',
            'Active User': 3490,

        },
        {
            name: 'Aug',
            'Active User': 3090,

        },
        {
            name: 'Sept',
            'Active User': 3590,

        },
        {
            name: 'Oct',
            'Active User': 3990,

        },
        {
            name: 'Nov',
            'Active User': 3190,

        },
        {
            name: 'Dec',
            'Active User': 3790,

        },
    ];



    return (
        <div className='chart'>
            <h3 className="chartTitle">User Analytics</h3>


            <ResponsiveContainer width='100%' aspect={4 / 1}>

                <LineChart data={data}>
                    <XAxis dataKey='name' stroke='#5550be' />
                    <Line type='monotone' dataKey='Active User' stroke='#5550be' />
                    <Tooltip />
                </LineChart>

            </ResponsiveContainer>
        </div>
    )
}

export default Chart