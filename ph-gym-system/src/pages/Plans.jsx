import React from "react";
import { Plus, Edit2, Copy, Check, Star } from "lucide-react";
import { plans } from "../data/mockData";

export default function Plans() {
  return (
    <div
      className="flex flex-col gap-6"
    >
      <div
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="h2 font-bold mb-2">Plans & Packages</h1>
          <p className="text-secondary text-sm">
            Manage membership plans, pricing, and special offers.
          </p>
        </div>
        <button className="btn btn-primary">
          <Plus size={18} />
          Create New Plan
        </button>
      </div>

      <div
        className="grid grid-cols-4 gap-6"
      >
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="card relative"
            style={{
              display: "flex",
              flexDirection: "column",
              border: plan.isPopular
                ? "2px solid var(--accent)"
                : "1px solid var(--border-color)",
              transform: plan.isPopular ? "scale(1.02)" : "none",
            }}
          >
            {plan.isPopular && (
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "var(--accent)",
                  color: "#000",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  zIndex: 10,
                }}
              >
                <Star size={12} fill="#000" /> Most Popular
              </div>
            )}

            <div
              style={{
                paddingBottom: "20px",
                borderBottom: "1px solid var(--border-color)",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              <h3 className="h3 font-bold mb-2 pt-2">{plan.name}</h3>
              <div className="text-muted text-sm mb-4">{plan.duration}</div>
              <div className="h1 font-bold text-accent">{plan.price}</div>
            </div>

            <div style={{ flex: 1 }}>
              <div className="text-sm font-semibold mb-3">{plan.access}</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {plan.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "flex-start",
                      fontSize: "0.875rem",
                    }}
                  >
                    <Check
                      size={16}
                      className="text-success"
                      style={{ marginTop: "2px flex-shrink: 0" }}
                    />
                    <span className="text-secondary">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "8px", marginTop: "24px" }}>
              <button className="btn btn-secondary flex-1">
                <Edit2 size={16} /> Edit
              </button>
              <button className="btn-icon" title="Duplicate">
                <Copy size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
