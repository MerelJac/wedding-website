import React, {useState} from "react";
import ContactButton from "./ContactButton";


export default function RSVP({ onClose }) {
  return (
    <div style={overlay}>
      <div style={modal}>
        <button onClick={onClose} style={closeBtn}>
          ✕
        </button>
        <div className="flex flex-col justify-center gap-2 items-center text-center">
          <p className="text-darkBeige">
            Confirm your RSVP by texting Merel & include all
            people in your party!
          </p>
<ContactButton/>
          <p className="text-darkBeige">
            Please be mindful that we are not welcoming plus ones that were not
            on the original invitiation. If we forgot someone, contact us & let
            us know!{" "}
          </p>
        </div>
      </div>
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
  zIndex: 1000,
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
