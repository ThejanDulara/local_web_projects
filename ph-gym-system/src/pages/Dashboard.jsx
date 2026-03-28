import React from "react";
import {
  Users,
  CreditCard,
  UserPlus,
  CalendarCheck,
  Activity,
  AlertTriangle,
  DollarSign,
  Target,
  Plus,
  Download,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  summaryStats,
  recentActivity,
  membershipDistribution,
  revenueData,
} from "../data/mockData";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="h2 font-bold mb-2">Good Morning, Admin 👋</h1>
          <p className="text-secondary text-sm">
            Here's what's happening at Power House Gym today.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="btn btn-secondary">
            <Download size={18} />
            Daily Report
          </button>
          <button className="btn btn-primary">
            <Plus size={18} />
            Quick Action
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div
        className="grid grid-cols-4 gap-4 mb-6"
      >
        <div
          className="card glass-card flex items-center justify-between"
        >
          <div>
            <p className="text-secondary text-sm mb-1">Total Members</p>
            <h2 className="h1 font-bold">{summaryStats.totalMembers}</h2>
            <p className="text-success text-xs mt-2 flex items-center gap-1">
              <Activity size={12} /> +12 this month
            </p>
          </div>
          <div
            className="btn-icon flex items-center justify-center p-3 rounded-lg"
            style={{ backgroundColor: "var(--info-bg)", color: "var(--info)" }}
          >
            <Users size={28} />
          </div>
        </div>

        <div
          className="card glass-card flex items-center justify-between"
        >
          <div>
            <p className="text-secondary text-sm mb-1">Active Members</p>
            <h2 className="h1 font-bold text-success">
              {summaryStats.activeMembers}
            </h2>
            <p className="text-muted text-xs mt-2">86% retention rate</p>
          </div>
          <div
            className="btn-icon flex items-center justify-center p-3 rounded-lg"
            style={{
              backgroundColor: "var(--success-bg)",
              color: "var(--success)",
            }}
          >
            <Target size={28} />
          </div>
        </div>

        <div
          className="card glass-card flex items-center justify-between"
        >
          <div>
            <p className="text-secondary text-sm mb-1">Total Revenue</p>
            <h2 className="h2 font-bold" style={{ fontSize: "1.2rem" }}>
              {summaryStats.monthlyRevenue}
            </h2>
            <p className="text-success text-xs mt-2 flex items-center gap-1">
              <Activity size={12} /> +4% vs last month
            </p>
          </div>
          <div
            className="btn-icon flex items-center justify-center p-3 rounded-lg"
            style={{
              backgroundColor: "var(--accent-glow)",
              color: "var(--accent)",
            }}
          >
            <DollarSign size={28} />
          </div>
        </div>

        <div
          className="card glass-card flex items-center justify-between" style={{ borderColor: "var(--danger-bg)" }}
        >
          <div>
            <p className="text-secondary text-sm mb-1">Pending Payments</p>
            <h2 className="h1 font-bold text-danger">
              {summaryStats.pendingPayments}
            </h2>
            <p className="text-danger-bg text-xs mt-2 text-danger">
              Requires action
            </p>
          </div>
          <div
            className="btn-icon flex items-center justify-center p-3 rounded-lg"
            style={{
              backgroundColor: "var(--danger-bg)",
              color: "var(--danger)",
            }}
          >
            <AlertTriangle size={28} />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div
        className="grid grid-cols-3 gap-6 mb-6"
      >
        <div className="card">
          <div
            className="flex justify-between items-center mb-6"
          >
            <h3 className="h4 font-bold">Revenue Overview</h3>
            <select
              className="input text-sm"
              style={{ width: "auto", padding: "6px 12px" }}
            >
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>
          </div>
          <div style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FFD700" stopOpacity={0} />
                  </linearGradient>
                </defs>
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
                  itemStyle={{ color: "var(--text-primary)" }}
                />
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border-color)"
                  vertical={false}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#FFD700"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h3 className="h4 font-bold mb-2">Memberships</h3>
          <div style={{ height: "200px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={membershipDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {membershipDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-color)",
                    borderRadius: "8px",
                  }}
                  itemStyle={{ color: "var(--text-primary)" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div
            className="flex flex-col gap-2 mt-4"
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
          >
            {membershipDistribution.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center text-sm"
              >
                <div
                  className="flex items-center gap-2"
                >
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: item.fill,
                    }}
                  ></div>
                  <span className="text-secondary">{item.name}</span>
                </div>
                <span className="font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid: Activity Feed & Quick Actions */}
      <div
        className="grid grid-cols-2 gap-6"
      >
        <div
          className="card"
        >
          <div
            className="flex justify-between items-center mb-6"
          >
            <h3 className="h4 font-bold">Recent Activity</h3>
            <button
              className="btn btn-secondary text-sm"
              style={{ padding: "4px 12px" }}
            >
              View All
            </button>
          </div>
          <div
            className="flex flex-col gap-4"
          >
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 pb-4 border-b"
                style={{
                  display: "flex",
                  borderBottom: "1px solid var(--border-color)",
                  gap: "16px",
                }}
              >
                <div
                  className="btn-icon"
                  style={{
                    backgroundColor: "var(--bg-card-hover)",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                >
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{activity.message}</p>
                  <p className="text-xs text-muted mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="h4 font-bold mb-6">Today's Quick Actions</h3>
          <div
            className="grid grid-cols-2 gap-4"
          >
            <button
              className="btn btn-secondary flex-col items-center justify-center p-6 gap-3"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "120px",
              }}
            >
              <UserPlus size={32} className="text-info" />
              <span>Add Member</span>
            </button>
            <button
              className="btn btn-secondary flex-col items-center justify-center p-6 gap-3"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "120px",
              }}
            >
              <CreditCard size={32} className="text-success" />
              <span>Record Payment</span>
            </button>
            <button
              className="btn btn-secondary flex-col items-center justify-center p-6 gap-3"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "120px",
              }}
            >
              <CalendarCheck size={32} className="text-accent" />
              <span>Mark Attendance</span>
            </button>
            <button
              className="btn btn-secondary flex-col items-center justify-center p-6 gap-3"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "120px",
              }}
            >
              <Target size={32} className="text-warning" />
              <span>Assign Trainer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
