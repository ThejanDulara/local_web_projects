import React, { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Download,
  DollarSign,
  CreditCard,
  Clock,
  AlertCircle,
  FileText,
} from "lucide-react";
import { payments } from "../data/mockData";

export default function Payments() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Paid", "Pending", "Overdue"];

  return (
    <div
      className="flex flex-col gap-6"
    >
      <div
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="h2 font-bold mb-2">Payments & Billing</h1>
          <p className="text-secondary text-sm">
            Track membership fees, invoices, and revenue.
          </p>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <button className="btn btn-secondary">
            <Download size={18} />
            Export Data
          </button>
          <button className="btn btn-primary">
            <Plus size={18} />
            Record Payment
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div
        className="grid grid-cols-4 gap-4"
      >
        <div
          className="card glass-card"
          style={{ display: "flex", alignItems: "center", gap: "16px" }}
        >
          <div
            className="btn-icon flex items-center justify-center p-3 rounded-lg"
            style={{
              backgroundColor: "var(--success-bg)",
              color: "var(--success)",
            }}
          >
            <DollarSign size={24} />
          </div>
          <div>
            <p className="text-secondary text-xs mb-1">Today's Collections</p>
            <h2 className="h2 font-bold">Rs. 25,000</h2>
          </div>
        </div>

        <div
          className="card glass-card"
          style={{ display: "flex", alignItems: "center", gap: "16px" }}
        >
          <div
            className="btn-icon flex items-center justify-center p-3 rounded-lg"
            style={{
              backgroundColor: "var(--accent-glow)",
              color: "var(--accent)",
            }}
          >
            <CreditCard size={24} />
          </div>
          <div>
            <p className="text-secondary text-xs mb-1">Total Revenue (Month)</p>
            <h2 className="h2 font-bold">Rs. 1.25M</h2>
          </div>
        </div>

        <div
          className="card glass-card"
          style={{ display: "flex", alignItems: "center", gap: "16px" }}
        >
          <div
            className="btn-icon flex items-center justify-center p-3 rounded-lg"
            style={{
              backgroundColor: "var(--warning-bg)",
              color: "var(--warning)",
            }}
          >
            <Clock size={24} />
          </div>
          <div>
            <p className="text-secondary text-xs mb-1">Pending Collections</p>
            <h2 className="h2 font-bold text-warning">Rs. 45,000</h2>
          </div>
        </div>

        <div
          className="card glass-card border-danger-bg"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            borderColor: "var(--danger-bg)",
          }}
        >
          <div
            className="btn-icon flex items-center justify-center p-3 rounded-lg"
            style={{
              backgroundColor: "var(--danger-bg)",
              color: "var(--danger)",
            }}
          >
            <AlertCircle size={24} />
          </div>
          <div>
            <p className="text-secondary text-xs mb-1">Overdue Invoices</p>
            <h2 className="h2 font-bold text-danger">Rs. 18,500</h2>
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: "0", marginTop: "16px" }}>
        {/* Filters */}
        <div
          style={{
            padding: "20px",
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          <div className="tabs" style={{ marginBottom: "20px" }}>
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="search-bar" style={{ width: "350px" }}>
              <Search size={18} color="var(--text-muted)" />
              <input type="text" placeholder="Search invoices, members..." />
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <select
                className="input text-sm"
                style={{ padding: "6px 12px", width: "auto" }}
              >
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
              <button className="btn btn-secondary text-sm">
                <Filter size={16} />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div
          className="table-container"
          style={{ border: "none", borderRadius: "0" }}
        >
          <table className="table">
            <thead>
              <tr>
                <th>Invoice</th>
                <th>Member</th>
                <th>Plan Details</th>
                <th>Amount</th>
                <th>Date / Due Date</th>
                <th>Method</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.invoiceId}>
                  <td style={{ fontWeight: "500", color: "var(--accent)" }}>
                    {payment.invoiceId}
                  </td>
                  <td>
                    <div style={{ fontWeight: "600" }}>{payment.member}</div>
                  </td>
                  <td style={{ color: "var(--text-secondary)" }}>
                    {payment.plan}
                  </td>
                  <td style={{ fontWeight: "600" }}>{payment.amount}</td>
                  <td>
                    {payment.status === "Paid" ? (
                      <span style={{ color: "var(--success)" }}>
                        {payment.date}
                      </span>
                    ) : (
                      <span style={{ color: "var(--danger)" }}>
                        Due: {payment.dueDate}
                      </span>
                    )}
                  </td>
                  <td style={{ color: "var(--text-secondary)" }}>
                    {payment.method}
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        payment.status === "Paid"
                          ? "badge-success"
                          : payment.status === "Pending"
                            ? "badge-warning"
                            : "badge-danger"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <button className="btn-icon" title="View Invoice">
                        <FileText size={18} />
                      </button>
                      {payment.status !== "Paid" && (
                        <button
                          className="btn btn-primary text-xs"
                          style={{ padding: "4px 12px" }}
                        >
                          Collect
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
