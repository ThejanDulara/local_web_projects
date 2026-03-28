import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { Download, Printer, Filter } from "lucide-react";
import { revenueData, attendanceData } from "../data/mockData";

export default function Reports() {
  return (
    <div
      className="flex flex-col gap-6"
    >
      <div
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="h2 font-bold mb-2">Analytics & Reports</h1>
          <p className="text-secondary text-sm">
            Business intelligence for Power House Gym.
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button className="btn btn-secondary">
            <Printer size={18} /> Print Summary
          </button>
          <button className="btn btn-primary">
            <Download size={18} /> Export PDF
          </button>
        </div>
      </div>

      <div
        className="grid grid-cols-2 gap-6"
      >
        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <h3 className="h4 font-bold">Revenue Trends</h3>
          </div>
          <div style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border-color)"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  stroke="var(--text-muted)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="var(--text-muted)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `Rs.${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-color)",
                    borderRadius: "8px",
                  }}
                  cursor={{ fill: "var(--bg-card-hover)" }}
                />
                <Bar
                  dataKey="revenue"
                  fill="var(--accent)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <h3 className="h4 font-bold">Attendance by Time</h3>
          </div>
          <div style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border-color)"
                  vertical={false}
                />
                <XAxis
                  dataKey="time"
                  stroke="var(--text-muted)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="var(--text-muted)"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-color)",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="var(--info)"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "var(--bg-card)", strokeWidth: 2 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="h4 font-bold mb-6">Key Performance Indicators</h3>
        <div
          className="grid grid-cols-4 gap-6"
        >
          <div
            style={{
              padding: "20px",
              borderRight: "1px solid var(--border-color)",
            }}
          >
            <div
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.875rem",
                marginBottom: "8px",
              }}
            >
              Member Retention
            </div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "var(--success)",
              }}
            >
              86%
            </div>
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: "0.75rem",
                marginTop: "4px",
              }}
            >
              Target: 80%
            </div>
          </div>
          <div
            style={{
              padding: "20px",
              borderRight: "1px solid var(--border-color)",
            }}
          >
            <div
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.875rem",
                marginBottom: "8px",
              }}
            >
              Collection Rate
            </div>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>92%</div>
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: "0.75rem",
                marginTop: "4px",
              }}
            >
              +2% vs last month
            </div>
          </div>
          <div
            style={{
              padding: "20px",
              borderRight: "1px solid var(--border-color)",
            }}
          >
            <div
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.875rem",
                marginBottom: "8px",
              }}
            >
              Active Trainers
            </div>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>12</div>
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: "0.75rem",
                marginTop: "4px",
              }}
            >
              Avg load: 15 clients
            </div>
          </div>
          <div style={{ padding: "20px" }}>
            <div
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.875rem",
                marginBottom: "8px",
              }}
            >
              Most Popular Plan
            </div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "var(--accent)",
              }}
            >
              3-Month
            </div>
            <div
              style={{
                color: "var(--text-muted)",
                fontSize: "0.75rem",
                marginTop: "4px",
              }}
            >
              42% of active users
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
