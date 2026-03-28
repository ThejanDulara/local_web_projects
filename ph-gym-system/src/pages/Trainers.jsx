import React, { useState } from "react";
import {
  Star,
  MapPin,
  Search,
  Calendar,
  Phone,
  Mail,
  Award,
  Clock,
} from "lucide-react";
import { trainers } from "../data/mockData";

export default function Trainers() {
  return (
    <div
      className="flex flex-col gap-6"
    >
      <div
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="h2 font-bold mb-2">Trainer Management</h1>
          <p className="text-secondary text-sm">
            Manage your personal trainers, schedules, and active clients.
          </p>
        </div>
        <button className="btn btn-primary">Add New Trainer</button>
      </div>

      <div
        className="grid grid-cols-3 gap-6"
      >
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="card"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "20px",
              }}
            >
              <img
                src={`https://ui-avatars.com/api/?name=${trainer.name.replace(" ", "+")}&background=1a1a1a&color=FFD700`}
                className="avatar"
                style={{ width: "64px", height: "64px", borderRadius: "50%" }}
                alt={trainer.name}
              />
              <div>
                <h3 className="h4 font-bold">{trainer.name}</h3>
                <p className="text-accent text-sm font-medium">
                  {trainer.specialty}
                </p>
              </div>
            </div>

            <div
              className="grid grid-cols-2 gap-4 mb-6"
            >
              <div
                style={{
                  backgroundColor: "var(--bg-base)",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <p className="text-secondary text-xs mb-1">Experience</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontWeight: "bold",
                  }}
                >
                  <Award size={16} className="text-info" /> {trainer.experience}
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "var(--bg-base)",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <p className="text-secondary text-xs mb-1">Rating</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontWeight: "bold",
                  }}
                >
                  <Star
                    size={16}
                    className="text-warning"
                    fill="var(--warning)"
                  />{" "}
                  {trainer.rating}
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "var(--bg-base)",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <p className="text-secondary text-xs mb-1">Active Clients</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontWeight: "bold",
                  }}
                >
                  <Users size={16} className="text-success" />{" "}
                  {trainer.activeClients}
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "var(--bg-base)",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <p className="text-secondary text-xs mb-1">Status</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontWeight: "bold",
                  }}
                >
                  <Clock
                    size={16}
                    className={
                      trainer.available ? "text-success" : "text-danger"
                    }
                  />
                  <span
                    className={
                      trainer.available ? "text-success" : "text-danger"
                    }
                  >
                    {trainer.available ? "Available" : "Booked"}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "auto" }}>
              <button className="btn btn-secondary flex-1">View Profile</button>
              <button className="btn btn-primary flex-1">Schedule</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ensure Users is imported
import { Users } from "lucide-react";
