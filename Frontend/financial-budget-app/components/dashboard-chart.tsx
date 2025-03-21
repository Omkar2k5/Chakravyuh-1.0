"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    income: 4000,
    expenses: 2400,
    savings: 1600,
  },
  {
    name: "Feb",
    income: 4200,
    expenses: 2800,
    savings: 1400,
  },
  {
    name: "Mar",
    income: 4500,
    expenses: 3100,
    savings: 1400,
  },
  {
    name: "Apr",
    income: 4780,
    expenses: 3200,
    savings: 1580,
  },
  {
    name: "May",
    income: 4890,
    expenses: 3500,
    savings: 1390,
  },
  {
    name: "Jun",
    income: 4390,
    expenses: 3000,
    savings: 1390,
  },
]

export function DashboardChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="name" stroke="#666" />
          <YAxis stroke="#666" />
          <Area type="monotone" dataKey="income" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
          <Area type="monotone" dataKey="expenses" stackId="2" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
          <Area type="monotone" dataKey="savings" stackId="3" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

