import React, { useState } from "react";

const API_URL = "https://wedding-rsvp-api-0fcf768dcc57.herokuapp.com";

export default function RSVP({ onClose }) {
  const [page, setPage] = useState("search"); // search | party | confirm
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [party, setParty] = useState(null);
  const [guests, setGuests] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/api/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error("Search failed");
      const data = await res.json();
      if (!data.length) {
        setError("No guests found with that name.");
      } else {
        setParty(data[0]);
        setGuests(data[0].guests.map((g) => ({ ...g })));
        setPage("party");
      }
    } catch {
      setError("Search failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSaveAll() {
    try {
      const res = await fetch(`${API_URL}/api/party/${party.party_code}/rsvp`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ guests }),
      });
      if (!res.ok) throw new Error("Save failed");
      setPage("confirm");
    } catch {
      alert("Could not save RSVPs");
    }
  }

  function updateGuest(id, changes) {
    setGuests((prev) =>
      prev.map((g) => (g.id === id ? { ...g, ...changes } : g))
    );
  }

  function renderSearch() {
    return (
      <div >
        <h2>Find Your RSVP</h2>
        <form onSubmit={handleSearch} style={{ display: "flex", gap: 8 }} className="flex flex-col md:flex-row">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your first or last name"
            style={input}
          />
          <button type="submit" style={button} disabled={loading}>
            {loading ? "Searching…" : "Search"}
          </button>
        </form>
        {error && <p style={{ color: "crimson" }}>{error}</p>}
      </div>
    );
  }

  function renderParty() {
    return (
      <div className="flex flex-col w-full">
        <h2>{party.display_name}</h2>
        <p>Please RSVP for each guest:</p>
        {guests.map((g) => (
          <GuestCard key={g.id} guest={g} onChange={updateGuest} />
        ))}
        <button style={button} onClick={handleSaveAll}>
          Save RSVP!
        </button>
        <small>Reminder: No additional plus ones please! If we are missing someone, please mention them in the notes.</small>
      </div>
    );
  }

  function renderConfirm() {
    return (
      <div>
        <h2>Thank you!</h2>
        <p>
          Your RSVP has been saved. You can close this window or come back later
          to edit.
        </p>
        <button style={button} onClick={onClose}>
          Close
        </button>
      </div>
    );
  }

  return (
    <div style={overlay}>
      <div style={modal}>
        <button onClick={onClose} style={closeBtn}>
          ✕
        </button>
        {page === "search" && renderSearch()}
        {page === "party" && renderParty()}
        {page === "confirm" && renderConfirm()}
      </div>
    </div>
  );
}

/* ---------- Guest Subcomponent ---------- */
function GuestCard({ guest, onChange }) {
  return (
    <div style={card}>
      <div style={{ fontWeight: 600 }}>
        {guest.first_name} {guest.last_name}
      </div>
      <div style={{ marginTop: 8 }}>
        <label>
          <input
            type="radio"
            checked={guest.rsvp_status === "yes"}
            onChange={() => onChange(guest.id, { rsvp_status: "yes" })}
          />{" "}
          Yes
        </label>{" "}
        <label>
          <input
            type="radio"
            checked={guest.rsvp_status === "no"}
            onChange={() => onChange(guest.id, { rsvp_status: "no" })}
          />{" "}
          No
        </label>{" "}
        <label>
          <input
            type="radio"
            checked={guest.rsvp_status === "maybe"}
            onChange={() => onChange(guest.id, { rsvp_status: "maybe" })}
          />{" "}
          Maybe
        </label>
      </div>
      <textarea
        value={guest.rsvp_note || ""}
        onChange={(e) => onChange(guest.id, { rsvp_note: e.target.value })}
        placeholder="Add a note (optional)"
        style={textarea}
      />
    </div>
  );
}

/* ---------- Styles ---------- */
const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const modal = {
  background: "#fff",
  padding: 24,
  borderRadius: 12,
  width: "90%",
  maxWidth: 600,
  maxHeight: "90%",
  overflowY: "auto",
  position: "relative",
};
const closeBtn = {
  position: "absolute",
  top: 8,
  right: 8,
  border: "none",
  background: "transparent",
  fontSize: 20,
  cursor: "pointer",
};
const input = {
  flex: 1,
  padding: "10px 12px",
  borderRadius: 8,
  border: "1px solid #ccc",
};
const button = {
  padding: "10px 16px",
  borderRadius: 8,
  background: "#222",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  marginTop: 12,
};
const card = {
  marginTop: 12,
  padding: 12,
  border: "1px solid #eee",
  borderRadius: 8,
  background: "#fafafa",
};
const textarea = {
  width: "100%",
  minHeight: 60,
  marginTop: 8,
  padding: 8,
  borderRadius: 6,
  border: "1px solid #ddd",
};
