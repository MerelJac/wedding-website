import React, { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;
const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;

export default function AdminInvitePage() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [guests, setGuests] = useState([{ first_name: "", last_name: "" }]);
  const [message, setMessage] = useState("");
  const [rsvps, setRsvps] = useState([]);

  function handleLogin(e) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuth(true);
      setPassword("");
      fetchRsvps();
    } else {
      setMessage("Wrong password.");
    }
  }

  async function fetchRsvps() {
    try {
      const res = await fetch(`${API_URL}/api/admin/rsvps`, {
        headers: { "x-admin-key": ADMIN_PASSWORD },
      });
      if (!res.ok) throw new Error("Failed to fetch RSVPs");
      const data = await res.json();
      setRsvps(data);
    } catch (err) {
      console.error(err);
      setMessage("❌ Error loading RSVPs");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/admin/party`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-key": ADMIN_PASSWORD },
        body: JSON.stringify({ display_name: displayName, guests }),
      });
      if (!res.ok) throw new Error("Failed to add party");
      setMessage("✅ Party added!");
      setDisplayName("");
      setGuests([{ first_name: "", last_name: "" }]);
      fetchRsvps(); // refresh list after adding
    } catch (err) {
      setMessage("❌ Error: " + err.message);
    }
  }

  function updateGuest(i, field, value) {
    setGuests(prev =>
      prev.map((g, idx) => (idx === i ? { ...g, [field]: value } : g))
    );
  }

  function renderRsvps() {
    if (!rsvps.length) return <p>No RSVPs yet.</p>;

    let yesCount = 0, noCount = 0, maybeCount = 0;

    rsvps.forEach(p =>
      p.guests.forEach(g => {
        if (g.rsvp_status === "yes") yesCount++;
        if (g.rsvp_status === "no") noCount++;
        if (g.rsvp_status === "maybe") maybeCount++;
      })
    );

    return (
      <div style={{ marginTop: 40 }}>
        <h2>RSVP Overview</h2>
        <p>✅ Yes: {yesCount} | ❌ No: {noCount} | ❓ Maybe: {maybeCount}</p>
        {rsvps.map(p => (
          <div key={p.party_id} style={{ marginTop: 20, padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
            <h3>{p.display_name}</h3>
            <ul>
              {p.guests.map(g => (
                <li key={g.id}>
                  <b>{g.first_name} {g.last_name}</b> — {g.rsvp_status || "no response"}
                  {g.rsvp_note && <em> (note: {g.rsvp_note})</em>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: 20 }}>
      {!auth ? (
        <form onSubmit={handleLogin}>
          <h2>Admin Login</h2>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button type="submit">Login</button>
          {message && <p>{message}</p>}
        </form>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <h2>Add a Party</h2>
            <input
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
              placeholder="Party Display Name"
            />
            <h3>Guests</h3>
            {guests.map((g, i) => (
              <div key={i} style={{ marginBottom: 8 }}>
                <input
                  value={g.first_name}
                  onChange={e => updateGuest(i, "first_name", e.target.value)}
                  placeholder="First name"
                />
                <input
                  value={g.last_name}
                  onChange={e => updateGuest(i, "last_name", e.target.value)}
                  placeholder="Last name"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => setGuests(prev => [...prev, { first_name: "", last_name: "" }])}
            >
              ➕ Add Guest
            </button>
            <br />
            <button type="submit">Save Party</button>
            {message && <p>{message}</p>}
          </form>

          {renderRsvps()}
        </>
      )}
    </div>
  );
}
