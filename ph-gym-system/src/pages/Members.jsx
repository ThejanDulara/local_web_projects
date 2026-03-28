import React, { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  MoreVertical,
  Edit2,
  Trash2,
  RefreshCw,
  Printer,
} from "lucide-react";
import { members } from "../data/mockData";

export default function Members() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Active", "Expiring Soon", "Expired", "Pending"];

  return (
    <div
      className="flex flex-col gap-6"
    >
      <div
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="h2 font-bold mb-2">Members</h1>
          <p className="text-secondary text-sm">
            Manage your gym members, memberships, and profiles.
          </p>
        </div>
        <button className="btn btn-primary">
          <Plus size={18} />
          Add New Member
        </button>
      </div>

      <div className="card" style={{ padding: "0" }}>
        {/* Filters & Search */}
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
              <input
                type="text"
                placeholder="Search by name, ID, or phone..."
              />
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
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
                <th>Member Profile</th>
                <th>Phone</th>
                <th>Assigned Trainer</th>
                <th>Plan</th>
                <th>Expiry Date</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <img
                        src={`https://ui-avatars.com/api/?name=${member.name.replace(" ", "+")}&background=2e2e2e&color=FFD700`}
                        alt={member.name}
                        className="avatar"
                      />
                      <div>
                        <div style={{ fontWeight: "600" }}>{member.name}</div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                          }}
                        >
                          {member.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ color: "var(--text-secondary)" }}>
                    {member.phone}
                  </td>
                  <td>
                    {member.trainer !== "None" ? (
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: "var(--info)",
                          }}
                        ></div>
                        {member.trainer}
                      </span>
                    ) : (
                      <span style={{ color: "var(--text-muted)" }}>
                        Unassigned
                      </span>
                    )}
                  </td>
                  <td style={{ fontWeight: "500" }}>{member.plan}</td>
                  <td style={{ color: "var(--text-secondary)" }}>
                    {member.expiry}
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        member.status === "Active"
                          ? "badge-success"
                          : member.status === "Expiring Soon"
                            ? "badge-warning"
                            : "badge-danger"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div
                      style={{
                        display: "flex",
                        gap: "4px",
                        justifyContent: "flex-end",
                      }}
                    >
                      <button
                        className="btn-icon"
                        title="Renew"
                        style={{ color: "var(--success)" }}
                      >
                        <RefreshCw size={18} />
                      </button>
                      <button className="btn-icon" title="Edit">
                        <Edit2 size={18} />
                      </button>
                      <button className="btn-icon" title="More">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination mock */}
        <div
          style={{
            padding: "16px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Showing 1 to {members.length} of 452 entries
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button className="btn btn-secondary text-sm" disabled>
              Previous
            </button>
            <button
              className="btn btn-primary text-sm"
              style={{ padding: "6px 12px" }}
            >
              1
            </button>
            <button
              className="btn btn-secondary text-sm"
              style={{ padding: "6px 12px" }}
            >
              2
            </button>
            <button
              className="btn btn-secondary text-sm"
              style={{ padding: "6px 12px" }}
            >
              3
            </button>
            <span
              style={{
                color: "var(--text-muted)",
                display: "flex",
                alignItems: "center",
              }}
            >
              ...
            </span>
            <button className="btn btn-secondary text-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
