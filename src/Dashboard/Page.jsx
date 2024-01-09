import React, { useState } from 'react'
import { FaArrowUp, FaDollarSign, FaWallet } from "react-icons/fa";
import { MdCreditScore, MdOutlineAutoGraph } from "react-icons/md"
import { LineChart } from '@mui/x-charts/LineChart';
import './Style.css'
import { Area, AreaChart, Bar, BarChart, Cell, Legend, Pie, PieChart, RadialBar, RadialBarChart, ResponsiveContainer, Sector, Tooltip, XAxis, YAxis } from 'recharts';
import { FaArrowDown } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { RiExchangeDollarLine } from "react-icons/ri";
import { BsBank2 } from "react-icons/bs";
import { IoMdCash } from "react-icons/io";
import { FaMoneyCheckDollar, FaSackDollar } from "react-icons/fa6";



const data = [
    { amount: '5,000', name: 'Today Revenue', icon: RiExchangeDollarLine, iconColor: '#F7B229', bgColor: '#F9EFE1' },
    { amount: '5,000', name: 'Today Profit', icon: FaDollarSign, iconColor: '#6356FD', bgColor: '#E2EDFD' },
    { amount: '5,000', name: 'Today Sales', icon: FaWallet, iconColor: ' #66DAFB ', bgColor: '#E2F7FB' },
    { amount: '5,000', name: 'This Month Revenue', icon: FaSackDollar, iconColor: ' #EF70B2 ', bgColor: '#E7EBF2' },
    { amount: '5,000', name: 'This Month Profit', icon: FaMoneyCheckDollar, iconColor: ' #F56C22 ', bgColor: '#FCEFE8' },
    { amount: '5,000', name: 'This Month Sales', icon: MdOutlineAutoGraph, iconColor: ' #34B237 ', bgColor: '#DBF7E1' },
    // { amount: '5,000', name: 'Total Revenue', icon: FaDollarSign, iconColor: ' #A856FC ', bgColor: '#EBF0FD' },
    // { amount: '5,000', name: 'Total Revenue', icon: FaDollarSign, iconColor: ' #F9BF7D ', bgColor: '#F7F1F4' }
]


const recent = [
    { name: 'Jonathan Doe', amount: '50,000', status: 'Due', addres: '123 Maple Street, Willowville, CA 98765', id: '1', date: '11/12/2023' },
    { name: 'Jonathan Doe', amount: '50,000', status: 'Partial', addres: '456 Oak Avenue, Pine City, NY 54321', id: '2', date: '11/12/2023' },
    { name: 'Jonathan Doe', amount: '50,000', status: 'Paid', addres: '789 Elm Lane, Lakeside, TX 12345', id: '3', date: '11/12/2023' },
    { name: 'Jonathan Doe', amount: '50,000', status: 'Due', addres: '321 Birch Road, Mountainview, FL 67890', id: '4', date: '11/12/2023' },
    { name: 'Jonathan Doe', amount: '50,000', status: 'Due', addres: '567 Cedar Court, Riverdale, GA 23456', id: '5', date: '11/12/2023' },
    { name: 'Jonathan Doe', amount: '50,000', status: 'Due', addres: '567 Cedar Court, Riverdale, GA 23456', id: '5', date: '11/12/2023' },
    { name: 'Jonathan Doe', amount: '50,000', status: 'Due', addres: '567 Cedar Court, Riverdale, GA 23456', id: '5', date: '11/12/2023' },
    { name: 'Jonathan Doe', amount: '50,000', status: 'Due', addres: '567 Cedar Court, Riverdale, GA 23456', id: '5', date: '11/12/2023' },
    { name: 'Jonathan Doe', amount: '50,000', status: 'Due', addres: '567 Cedar Court, Riverdale, GA 23456', id: '5', date: '11/12/2023' },
    { name: 'Jonathan Doe', amount: '50,000', status: 'Due', addres: '567 Cedar Court, Riverdale, GA 23456', id: '5', date: '11/12/2023' },
];
const chart = [
    { "name": "1", "uv": 15.5, "pv": 24, "amt": 24 },
    { "name": "2", "uv": 20, "pv": 24, "amt": 24 },
    { "name": "3", "uv": 12, "pv": 24, "amt": 24 },
    { "name": "4", "uv": 24, "pv": 24, "amt": 24 },
    { "name": "5", "uv": 36, "pv": 24, "amt": 24 },
    { "name": "6", "uv": 17, "pv": 24, "amt": 24 },
    { "name": "2", "uv": 40, "pv": 24, "amt": 24 },
    { "name": "3", "uv": 10, "pv": 24, "amt": 24 },
    { "name": "4", "uv": 2, "pv": 24, "amt": 24 },
    { "name": "5", "uv": 25, "pv": 24, "amt": 24 },
    { "name": "6", "uv": 10, "pv": 24, "amt": 24 },
    { "name": "4", "uv": 24, "pv": 24, "amt": 24 },
    { "name": "5", "uv": 36, "pv": 24, "amt": 24 },
    { "name": "6", "uv": 17, "pv": 24, "amt": 24 },
    { "name": "2", "uv": 40, "pv": 24, "amt": 24 },
    { "name": "3", "uv": 10, "pv": 24, "amt": 24 },
    { "name": "4", "uv": 2, "pv": 24, "amt": 24 },


]

const data01 = [
    { "name": "Group A", "value": 400 },
    { "name": "Group b", "value": 700 },
]

const data02 = [
    { name: 'Income', value: 1 },
    { name: 'Expense', value: 4 },

];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" >{`Total ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 0} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};


const barChart = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300
    }
]

const radialChart = [
    {
        "name": "18-24",
        "uv": 31.47,
        "pv": 2400,
        "fill": "#8884d8"
    },
    {
        "name": "25-29",
        "uv": 26.69,
        "pv": 4567,
        "fill": "#83a6ed"
    },
    {
        "name": "30-34",
        "uv": -15.69,
        "pv": 1398,
        "fill": "#8dd1e1"
    },
    {
        "name": "35-39",
        "uv": 8.22,
        "pv": 9800,
        "fill": "#82ca9d"
    },
    {
        "name": "40-49",
        "uv": -8.63,
        "pv": 3908,
        "fill": "#a4de6c"
    },
    {
        "name": "50+",
        "uv": -2.63,
        "pv": 4800,
        "fill": "#d0ed57"
    },
    {
        "name": "unknow",
        "uv": 6.67,
        "pv": 4800,
        "fill": "#ffc658"
    }
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const Page = () => {

    const [select, setselect] = useState(false);
    const [activeIndex, setactiveIndex] = useState(0);


    return (
        <div style={{ padding: 20, }}>
            <div className='firstContainer' style={{ display: 'flex' }}>

                <div className='cards'>

                    <div className='container' >
                        {data?.map((value) => (
                            <div style={{ display: 'flex', backgroundColor: '#fff', borderRadius: 10, width: '100%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', gap: 20 }}>
                                <div style={{ width: '20%', backgroundColor: value.bgColor, alignItems: 'center', alignContent: 'center', display: 'flex', justifyContent: 'center', }}>
                                    {<value.icon size={29} color={value.iconColor} />}
                                </div>
                                <div>
                                    <p style={{ fontSize: 20, fontWeight: '600' }}>Rs.{value?.amount}</p>
                                    <p style={{ fontSize: 14, marginTop: -8, fontWeight: '500', color: 'gray' }}>{value?.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', margin: 'auto', gap: 20 }}>
                        <div style={{ display: 'flex', backgroundColor: '#fff', borderRadius: 10, width: '100%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', gap: 20 }}>
                            <div style={{ width: '20%', backgroundColor: '#85A59E', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignContent: 'center', display: 'flex', justifyContent: 'center', }}>
                                <IoMdCash size={40} />
                            </div>
                            <div>
                                <p style={{ fontSize: 26, fontWeight: '400' }}>Rs.50000</p>
                                <p style={{ fontSize: 14, marginTop: -8, fontWeight: '500', color: 'gray' }}>Cash in hand</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', backgroundColor: '#fff', borderRadius: 10, width: '100%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', gap: 20 }}>
                            <div style={{ width: '20%', backgroundColor: '#EED8C7', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignContent: 'center', display: 'flex', justifyContent: 'center', }}>
                                <BsBank2 size={35} />
                            </div>
                            <div>
                                <p style={{ fontSize: 26, fontWeight: '400' }}>Rs.50000</p>
                                <p style={{ fontSize: 14, marginTop: -8, fontWeight: '500', color: 'gray' }}>Bank Balance</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div style={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)', }} className='piechart'>
                    <ResponsiveContainer width='100%' height={350}>
                        <PieChart>
                            {/* <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={69} fill="#F7B229" /> */}
                            <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} 
                                activeIndex={activeIndex}
                                onPointerEnter={(...index) => setactiveIndex(index)}
                                fill="#8884d8"
                                activeShape={renderActiveShape} >
                            {/* <Tooltip /> */}
                            {data02.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS?.length]} />
                            ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="seconContainer" style={{ marginTop: 20 }}>
                <div style={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)', padding: 10 }} className='areachart'>
                    <h4 style={{ marginTop: 4 }}>Monthly Sales</h4>
                    <div className='recentMonth' >
                        <ResponsiveContainer width='100%' height={400}>
                            <AreaChart data={chart}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="90%" stopColor="#3F99F2" stopOpacity={.1} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                {/* <CartesianGrid strokeDasharray="1 1" /> */}
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#3F99F2" fillOpacity={1} fill="url(#colorUv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div style={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)', padding: 10 }} className='invoice'>
                    <h4 style={{ marginTop: 5, paddingLeft:'5%' }}>Recent Invoices</h4>
                    <div className='recent' style={{}}>

                        {recent?.map((item) => (
                            <div
                                style={{
                                    borderRadius: 5,
                                    backgroundColor: 'white',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginTop: 10,
                                    borderLeft: '5px solid green',
                                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                                }} >

                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        padding: '10px 20px',
                                        width: '90%',
                                        alignItems: 'center',
                                    }}
                                >
                                    <div style={{ marginTop: 2, width: '100%', }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ color: 'gray', fontSize: 12 }}>{item?.date}</span>
                                            <span style={{ color: 'gray', marginRight: 4 }}>
                                                invoice # {item?.id}
                                            </span>
                                        </div>
                                        <p style={{ color: 'gray', marginTop: 5 }}>{item?.name}</p>



                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: -7 }}>
                                            <div style={{ marginTop: 3, color: '#fff', backgroundColor: 'green', borderRadius: 5, fontSize: 12, paddingTop: 2, paddingBottom: 2, width: 60, textAlign: 'center' }}>
                                                <span style={{ textAlign: 'center' }}>{item?.status}</span>
                                            </div>
                                            <span style={{ color: 'red', marginRight: 4, fontWeight: 'bold' }}>
                                                Rs.{item?.amount}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="thirdContainer">
                <div className='RPcontainer' style={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)', }} >
                    <div className='amountReceived'>
                        <div style={{ display: 'flex', gap: 10, paddingLeft: 20 }}>
                            <h4 style={{}}>Amount Received</h4>
                            <FaArrowDown size={20} style={{ color: 'green', marginLeft: 6, marginTop: '4%' }} />
                        </div>
                        <div className='recieved' >
                            {recent?.map((item) => (
                                <div
                                    style={{
                                        borderRadius: 5,
                                        backgroundColor: 'white',
                                        alignItems: 'center',
                                        alignContent: 'center',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        marginTop: 10,
                                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                                    }} >

                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            padding: '10px 20px',
                                            width: '90%',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <div style={{ marginTop: 2, width: '100%', }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{}}>{item?.date}</span>
                                                <span style={{ color: 'gray' }}>CASH</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: -9, marginTop: -7 }}>
                                                <p style={{}}>{item?.name}</p>
                                                <p style={{ color: 'green', fontWeight: 'bold', textAlign: 'right' }}>
                                                    Rs.{item?.amount} <span><FaArrowDown size={14} style={{ color: 'green', marginLeft: 6, marginTop: '4%' }} /></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className='amountReceived'>

                        <div style={{ display: 'flex', gap: 10, paddingLeft: 20 }}>
                            <h4 >Amount Paid</h4>
                            <FaArrowUp size={20} style={{ color: 'red', marginTop: '4%' }} />
                        </div>
                        <div className='paid' >
                            {recent?.map((item) => (
                                <div
                                    style={{
                                        borderRadius: 5,
                                        backgroundColor: 'white',
                                        alignItems: 'center',
                                        alignContent: 'center',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        marginTop: 10,
                                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                                    }} >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            padding: '10px 20px',
                                            width: '90%',
                                            alignItems: 'center',
                                        }}>
                                        <div style={{ marginTop: 2, width: '100%', }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{}}>{item?.date}</span>
                                                <span style={{ color: 'gray' }}>CASH</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: -9, marginTop: -7 }}>
                                                <p style={{}}>{item?.name}</p>
                                                <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'right' }}>
                                                    Rs.{item?.amount} <span><FaArrowUp size={14} style={{ color: 'red', marginLeft: 6, marginTop: '4%' }} /></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', padding: 10 }} className='barChart'>
                    <h4 style={{ marginTop:8 }}>Daily Transactions</h4>
                    <ResponsiveContainer width='100%' height={450}>
                        <BarChart data={barChart}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="green" />
                            <Bar dataKey="uv" fill="red" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className='stockContainer'>
                <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', padding: 10 }} className='radialbar'>
                    <div style={{ display: 'flex', gap: 10, paddingLeft: 20 }}>
                        <h4 >Stock</h4>
                    </div>

                    <ResponsiveContainer width='100%' height={350}>
                        <RadialBarChart
                            innerRadius="20%"
                            outerRadius="110%"
                            data={radialChart}
                            startAngle={180}
                            endAngle={0}
                        >
                            <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
                            <Legend />
                            <Tooltip />
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>

                <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', padding: 10 }} className='radialbar'>
                    <div style={{ display: 'flex', gap: 10, paddingLeft: 20 }}>
                        <h4 >Stock Alert</h4>
                        <AiOutlineStock size={30} style={{ color: 'red', marginTop: '2%' }} />
                    </div>
                    <div className='paid' >
                        {recent?.map((item) => (
                            <div
                                style={{
                                    borderRadius: 5,
                                    backgroundColor: 'white',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginTop: 8,
                                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                                }} >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        padding: '5px 5px',
                                        width: '90%',
                                        alignItems: 'center',
                                    }}>
                                    <div style={{ marginTop: 2, width: '100%', display: 'flex', justifyContent: 'space-between', paddingLeft: 10 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '30%' }}>
                                            <p>Product Name</p>
                                        </div>
                                        <div style={{ display: 'flex', width: '50%', }}>
                                            <IoLocationSharp size={20} style={{ marginTop: '4.5%' }} />
                                            <p style={{ fontSize:14, color:'gray' }}>Address</p>
                                        </div>
                                        <p style={{ color: 'red', fontWeight: 500, width: '20%', textAlign: 'right' }}>Stock</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='purchaseContainer'>

                <div className='purchaseTable' style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', padding: 10 }} >
                    <div style={{ display: 'flex', gap: 10, paddingLeft: 20 }}>
                        <h4 >Purchase History</h4>
                        <AiOutlineStock size={30} style={{ color: 'red', marginTop: '2%' }} />
                    </div>
                    <table style={{ width: '100%', boxShadow: '0 0 10px rgba(0, 0, 0, .2)', }} >
                        <thead style={{ backgroundColor: '#44556C' }}>
                            <tr >
                                <th style={{ width: '20%', textAlign: 'center', color: 'white', padding: 9 }}>Date</th>
                                <th style={{ width: '20%', textAlign: 'center', color: 'white', padding: 9 }}>Invoice #</th>
                                <th style={{ width: '35%', textAlign: 'center', color: 'white', padding: 9 }}>Supplier Name</th>
                                <th style={{ width: '25%', textAlign: 'center', color: 'white', padding: 9 }}>Amount</th>
                            </tr>
                        </thead>
                        {recent?.map((value, index) => (
                            <tbody style={{}}>
                                <tr key={index} style={{ background: index % 2 === 1 ? '#EEEEEE' : 'white' }}>
                                    <td style={{ width: '20%', textAlign: 'center', padding: 9 }}>
                                        11-12-2023
                                    </td>
                                    <td style={{ width: '20%', textAlign: 'center', padding: 9 }}>
                                        0012
                                    </td>
                                    <td style={{ width: '35%', textAlign: 'center', padding: 9 }}>
                                        Jonathan
                                    </td>
                                    <td style={{ width: '25%', textAlign: 'center', padding: 9 }}>
                                        Rs.5,000
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
                <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', padding: 10 }} className='barChart'>
                    <h4 style={{  }}>Daily Purchase</h4>
                    <ResponsiveContainer width='100%' height={450}>
                        <BarChart data={barChart}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="gray" />
                            {/* <Bar dataKey="uv" fill="red" /> */}
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    )
}

export default Page
