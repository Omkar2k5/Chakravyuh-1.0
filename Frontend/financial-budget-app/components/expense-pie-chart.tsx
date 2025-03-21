"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const data = [
  { name: "Housing", value: 1200, color: "#3b82f6" },
  { name: "Food", value: 800, color: "#10b981" },
  { name: "Transportation", value: 400, color: "#f59e0b" },
  { name: "Entertainment", value: 300, color: "#8b5cf6" },
  { name: "Shopping", value: 500, color: "#ef4444" },
  { name: "Other", value: 200, color: "#6b7280" },
]

export function ExpensePieChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span>
              {item.name}: ${item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

