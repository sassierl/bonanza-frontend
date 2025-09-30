"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("player");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User:", username, "Role:", role);
    // plus tard → envoi au backend
    postMessage("user-joined", { username, role });
    if (!username.trim()) {
      alert("Please enter a username");
      return;
    }
    router.push(`/game`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Bonanza</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label>Choose your level or role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="expert">Expert</option>
            <option value="beginner">Beginner</option>
            <option value="spectator">Spectator</option>
          </select>
        </div>

        <button type="submit">Start</button>
      </form>
    </div>
  );
}
