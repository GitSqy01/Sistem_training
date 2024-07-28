import { Sidebar } from "@/Layouts/Sidebar";
import { useState } from "react";

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
        { status: "HARIAN", jumlah: 65, fill: "#355E3B" },
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
                fontSize="16"
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
                         bg-yellow-900 p-2
                    `}
                >
                    <nav className="w-full p-2">
                        <div className="flex justify-between">
                            <button className="px-4 py-1 bg-indigo-500 border rounded-md">
                                Master Karyawan
                            </button>
                            <div>
                                <button className="px-4 py-1 border">
                                    bulan
                                </button>
                                <button className="px-4 py-1 ml-4 border">
                                    tahun
                                </button>
                            </div>
                        </div>
                    </nav>
                    <div className="flex flex-wrap items-center justify-center gap-4">
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
                    </div>
                </div>
            </div>
        </>
    );
}
