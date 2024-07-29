import { Sidebar } from "@/Layouts/Sidebar";
import { useState } from "react";
import Bell from "../../assets/icons/bell-solid.svg";
import Kalender from "../../assets/icons/calendar-days-solid.svg";

import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList,
    LineChart,
    Line,
} from "recharts";

export default function DashboardPage(options) {
    const dummyData = [
        { departemen: "Produksi", jumlah: 50 },
        { departemen: "Maintenance", jumlah: 10 },
        { departemen: "SCM", jumlah: 40 },
        { departemen: "Engineering", jumlah: 23 },
        { departemen: "Engineering NPD", jumlah: 44 },
        { departemen: "HRGA", jumlah: 33 },
        { departemen: "Finance & Accounting", jumlah: 3 },
        { departemen: "BPS", jumlah: 5 },
        { departemen: "CSM", jumlah: 2 },
        { departemen: "Quality", jumlah: 44 },
        { departemen: "IT", jumlah: 5 },
    ];

    const genderData = [
        { gender: "Pria", jumlah: 120 },
        { gender: "Wanita", jumlah: 80 },
    ];

    const statusData = [
        { status: "KARYAWAN", jumlah: 150, fill: "#80B436" },
        { status: "MAGANG", jumlah: 120, fill: "#3D77B5" },
        { status: "LPK", jumlah: 90, fill: "#EEC643" },
        { status: "HARIAN", jumlah: 65, fill: "#8dc696" },
    ];

    const dataUsia = [
        { status: "<20", jumlah: 50 },
        { status: "21-30", jumlah: 100 },
        { status: "31-40", jumlah: 150 },
        { status: "41-50", jumlah: 120 },
        { status: ">51", jumlah: 80 },
    ];

    const dataPendidikan = [
        { status: "SD", jumlah: 50 },
        { status: "SMP", jumlah: 100 },
        { status: "SMA", jumlah: 150 },
        { status: "D3", jumlah: 120 },
        { status: "S1", jumlah: 120 },
    ];

    const dataJabatan = [
        { status: "Manager", jumlah: 2 },
        { status: "Asst Manager", jumlah: 5 },
        { status: "Leader", jumlah: 22 },
        { status: "Stafff", jumlah: 15 },
        { status: "Operator", jumlah: 150 },
    ];

    const dataDepartement = [
        { status: "Produksi", jumlah: 50 },
        { status: "Maintenance", jumlah: 10 },
        { status: "SCM", jumlah: 40 },
        { status: "Engineering", jumlah: 23 },
        { status: "Engineering NPD", jumlah: 44 },
        { status: "HRGA", jumlah: 33 },
        { status: "Fin & Acct", jumlah: 3 },
        { status: "BPS", jumlah: 5 },
        { status: "CSM", jumlah: 2 },
        { status: "Quality", jumlah: 44 },
        { status: "IT", jumlah: 5 },
    ];

    const reportTrainings = [
        { status: "January", jumlah: 12 },
        { status: "February", jumlah: 18 },
        { status: "March", jumlah: 25 },
        { status: "April", jumlah: 15 },
        { status: "May", jumlah: 22 },
        { status: "June", jumlah: 5 },
        { status: "July", jumlah: 28 },
        { status: "August", jumlah: 20 },
        { status: "September", jumlah: 24 },
        { status: "October", jumlah: 18 },
        { status: "November", jumlah: 22 },
        { status: "December", jumlah: 15 },
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A"];

    const renderCustomLegend = (props) => {
        const { payload } = props;
        return (
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                {payload.map((entry, index) => (
                    <li
                        key={`item-${index}`}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: 4,
                        }}
                    >
                        <div
                            style={{
                                width: 10,
                                height: 10,
                                backgroundColor: entry.color,
                                marginRight: 5,
                            }}
                        ></div>
                        <span style={{ fontSize: "10px", color: entry.color }}>
                            {entry.value}
                        </span>
                    </li>
                ))}
            </ul>
        );
    };

    const renderCustomLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        value,
        index,
    }) => {
        const RADIAN = Math.PI / 180;
        // Calculate position for label
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="black"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="10"
            >
                {value}
            </text>
        );
    };
    return (
        <>
            <div className="grid grid-cols-12">
                <Sidebar />
                <div
                    className={` col-span-10 
                         bg-gray-300 p-2
                    `}
                >
                    <nav className="w-full p-2">
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <button className="px-4 py-1 font-semibold bg-indigo-500 border rounded-md">
                                    Master Karyawan
                                </button>
                                <button className="mx-2">
                                    <img
                                        src={Bell}
                                        alt="bell"
                                        className="w-8 h-8"
                                    />
                                </button>
                            </div>
                            <div>
                                <button className="px-4 py-1 bg-gray-400 border rounded-md outline outline-[1.5px] ">
                                    <span className="font-semibold">
                                        Januari
                                    </span>
                                    <img
                                        src={Kalender}
                                        alt=""
                                        className="inline-block w-5 h-5 ml-2"
                                    />
                                </button>
                                <button className="px-4 py-1 ml-4 bg-gray-400 border rounded-md outline outline-[1.5px] ">
                                    <span className="font-semibold">2024</span>
                                    <img
                                        src={Kalender}
                                        alt=""
                                        className="inline-block w-5 h-5 ml-2"
                                    />
                                </button>
                            </div>
                        </div>
                    </nav>
                    <div className="flex flex-wrap items-center justify-center gap-4 my-4">
                        <div className="border p-2 w-[220px] h-[200px]">
                            <h1>Status Karyawan</h1>
                            <ResponsiveContainer width="100%" height={150}>
                                <PieChart>
                                    <Pie
                                        data={statusData}
                                        dataKey="jumlah"
                                        nameKey="status"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={50}
                                        fill="#8884d8"
                                        label={renderCustomLabel}
                                        labelLine={false}
                                        // labelStyle={{
                                        //     fontSize: "12px", // Set font size here
                                        //     fontWeight: "bold",
                                        // }}
                                    >
                                        {statusData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={entry.fill}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value) =>
                                            `${value} karyawan`
                                        }
                                    />
                                    <Legend
                                        content={renderCustomLegend}
                                        layout="vertical"
                                        align="right"
                                        verticalAlign="middle"
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="border p-2 w-[220px] h-[200px]">
                            <h1>Data Gender</h1>
                            <p className="text-xs text-gray-500">
                                24 Per Hari Ini
                            </p>
                            <ResponsiveContainer width="100%" height={120}>
                                <PieChart>
                                    <Pie
                                        data={genderData}
                                        dataKey="jumlah"
                                        nameKey="gender"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={50}
                                        fill="#8884d8"
                                        label={renderCustomLabel}
                                        labelLine={false}
                                    >
                                        {statusData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={entry.fill}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value) =>
                                            `${value} karyawan`
                                        }
                                    />
                                    <Legend
                                        content={renderCustomLegend}
                                        layout="vertical"
                                        align="right"
                                        verticalAlign="middle"
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="border p-2 w-[220px] h-[200px]">
                            <h1>Usia</h1>
                            <ResponsiveContainer width="100%" height={150}>
                                <PieChart>
                                    <Pie
                                        data={dataUsia}
                                        dataKey="jumlah"
                                        nameKey="status"
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={30}
                                        outerRadius={50}
                                        fill="#8884d8"
                                        label={renderCustomLabel}
                                        labelLine={false}
                                        // labelStyle={{
                                        //     fontSize: "12px", // Set font size here
                                        //     fontWeight: "bold",
                                        // }}
                                    >
                                        {dataUsia.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index]}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value) =>
                                            `${value} karyawan`
                                        }
                                    />
                                    <Legend
                                        content={renderCustomLegend}
                                        layout="vertical"
                                        align="right"
                                        verticalAlign="middle"
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="border p-2 w-[220px] h-[200px]">
                            <h1>Pendidikan</h1>
                            <ResponsiveContainer width="100%" height={150}>
                                <PieChart>
                                    <Pie
                                        data={dataPendidikan}
                                        dataKey="jumlah"
                                        nameKey="status"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={50}
                                        fill="#8884d8"
                                        label={renderCustomLabel}
                                        labelLine={false}
                                    >
                                        {statusData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={entry.fill}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value) =>
                                            `${value} karyawan`
                                        }
                                    />
                                    <Legend
                                        content={renderCustomLegend}
                                        layout="vertical"
                                        align="right"
                                        verticalAlign="middle"
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="my-10">
                        <h1 className="text-center">Level Jabatan</h1>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart
                                data={dataJabatan}
                                barSize={20}
                                margin={{
                                    top: 10,
                                    right: 5,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="1 1" />
                                <XAxis dataKey="status" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="jumlah" fill="#805ed7">
                                    <LabelList
                                        dataKey="jumlah"
                                        position="top"
                                    />
                                </Bar>
                                <Legend
                                    layout="vertical"
                                    align="right"
                                    // content={renderCustomLegend}
                                    verticalAlign="middle"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="my-10">
                        <h1 className="text-center">Data Karyawan</h1>
                        <ResponsiveContainer width="100%" height={200}>
                            <BarChart
                                data={dataDepartement}
                                barSize={20}
                                margin={{
                                    top: 10,
                                    right: 5,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="1 1" />
                                <XAxis dataKey="status" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="jumlah" fill="#805ed7">
                                    <LabelList
                                        dataKey="jumlah"
                                        position="top"
                                    />
                                </Bar>
                                <Legend
                                    layout="vertical"
                                    align="right"
                                    // content={renderCustomLegend}
                                    verticalAlign="middle"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div>
                        <h1 className="text-center">Report Training</h1>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart
                                data={reportTrainings}
                                margin={{
                                    top: 10,
                                    right: 5,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid />
                                <XAxis dataKey="status" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="jumlah"
                                    stroke="#8884d8"
                                    fill="#8884d8"
                                />
                                <Legend
                                    verticalAlign="middle"
                                    align="right"
                                    layout="vertical"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </>
    );
}
