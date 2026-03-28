import React from "react";
import {
  QrCode,
  UserCheck,
  TrendingUp,
  Users,
  CalendarDays,
  Clock,
  CheckCircle,
  Search,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { attendanceData } from "../data/mockData";

export default function Attendance() {
  return (
    <div
      className="flex flex-col gap-6"
    >
      <div
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="h2 font-bold mb-2">Access & Attendance</h1>
          <p className="text-secondary text-sm">
            Monitor gym check-ins, peak hours, and member consistency.
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-3 gap-6"
      >
        {/* Check-in Scanner Simulator */}
        <div
          className="card text-center"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "32px 24px",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--accent-glow)",
              padding: "24px",
              borderRadius: "50%",
              marginBottom: "24px",
            }}
          >
            <QrCode size={64} className="text-accent" />
          </div>
          <h3 className="h3 font-bold mb-2">Member Check-in</h3>
          <p className="text-secondary text-sm mb-6">
            Scan membership card or QR code to record attendance.
          </p>

          <div
            className="search-bar"
            style={{ width: "100%", marginBottom: "16px" }}
          >
            <Search size={18} color="var(--text-muted)" />
            <input type="text" placeholder="Enter Member ID..." />
          </div>
          <button
            className="btn btn-primary"
            style={{ width: "100%", padding: "12px" }}
          >
            Manual Check-in
          </button>
        </div>

        {/* Attendance Stats & Chart */}
        <div
          className="flex flex-col gap-6"
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <div
            className="grid grid-cols-3 gap-4"
          >
            <div className="card glass-card">
              <p className="text-secondary text-sm mb-1">Today's Total</p>
              <h2 className="h1 font-bold">
                145
                <span className="text-sm text-secondary font-medium ml-2">
                  members
                </span>
              </h2>
            </div>
            <div className="card glass-card">
              <p className="text-secondary text-sm mb-1">Peak Hour</p>
              <h2 className="h2 font-bold">6:00 PM</h2>
              <p className="text-xs text-info mt-1">Evening Batch</p>
            </div>
            <div className="card glass-card">
              <p className="text-secondary text-sm mb-1">Weekly Avg</p>
              <h2 className="h2 font-bold">
                112
                <span className="text-sm text-secondary font-medium ml-2">
                  /day
                </span>
              </h2>
            </div>
          </div>

          <div
            className="card flex-1"
          >
            <div
              className="flex justify-between items-center mb-6"
            >
              <h3 className="h4 font-bold">Today's Footfall</h3>
              <div className="badge badge-accent">Live Updates</div>
            </div>
            <div style={{ flex: 1, minHeight: "200px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={attendanceData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
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
                  <Area
                    type="monotone"
                    dataKey="count"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorCount)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="h4 font-bold mb-4">Recent Check-ins</h3>
        <div
          className="table-container"
          style={{ border: "none", borderRadius: "0" }}
        >
          <table className="table">
            <thead>
              <tr>
                <th>Member</th>
                <th>Time In</th>
                <th>Area / Session</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <img
                      src="https://ui-avatars.com/api/?name=Nimal+Perera&background=2e2e2e&color=FFD700"
                      alt="Nimal"
                      className="avatar"
                    />
                    <div style={{ fontWeight: "600" }}>Nimal Perera</div>
                  </div>
                </td>
                <td style={{ color: "var(--text-secondary)" }}>
                  Just now (06:05 PM)
                </td>
                <td>
                  <span className="badge badge-info">General Floor</span>
                </td>
                <td>
                  <span
                    style={{
                      display: "flex",
                      gap: "4px",
                      alignItems: "center",
                      color: "var(--success)",
                    }}
                  >
                    <CheckCircle size={14} /> Entered
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <img
                      src="https://ui-avatars.com/api/?name=Sarah+Kumar&background=2e2e2e&color=FFD700"
                      alt="Sarah"
                      className="avatar"
                    />
                    <div style={{ fontWeight: "600" }}>Sarah Kumar</div>
                  </div>
                </td>
                <td style={{ color: "var(--text-secondary)" }}>
                  10 mins ago (05:55 PM)
                </td>
                <td>
                  <span className="badge badge-warning">Zumba Class</span>
                </td>
                <td>
                  <span
                    style={{
                      display: "flex",
                      gap: "4px",
                      alignItems: "center",
                      color: "var(--success)",
                    }}
                  >
                    <CheckCircle size={14} /> Entered
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <img
                      src="https://ui-avatars.com/api/?name=Kasun+Silva&background=2e2e2e&color=FFD700"
                      alt="Kasun"
                      className="avatar"
                    />
                    <div style={{ fontWeight: "600" }}>Kasun Silva</div>
                  </div>
                </td>
                <td style={{ color: "var(--text-secondary)" }}>
                  30 mins ago (05:35 PM)
                </td>
                <td>
                  <span className="badge badge-accent">PT Session</span>
                </td>
                <td>
                  <span
                    style={{
                      display: "flex",
                      gap: "4px",
                      alignItems: "center",
                      color: "var(--success)",
                    }}
                  >
                    <CheckCircle size={14} /> Entered
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <img
                      src="https://ui-avatars.com/api/?name=Lahiru+Jayasooriya&background=2e2e2e&color=FFD700"
                      alt="Lahiru"
                      className="avatar"
                    />
                    <div style={{ fontWeight: "600" }}>Lahiru Jayasooriya</div>
                  </div>
                </td>
                <td style={{ color: "var(--text-secondary)" }}>
                  1 hr ago (05:00 PM)
                </td>
                <td>
                  <span className="badge badge-info">General Floor</span>
                </td>
                <td>
                  <span
                    style={{
                      display: "flex",
                      gap: "4px",
                      alignItems: "center",
                      color: "var(--text-muted)",
                    }}
                  >
                    <Clock size={14} /> Checked Out
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
