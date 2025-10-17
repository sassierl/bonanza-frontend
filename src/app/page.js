"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "../components/FromInput";

export default function Page() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("player");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) {
      alert("Please enter a username");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/players", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: username }),
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error:", error);
    }

    router.push("/game");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Bonanza</h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Username:"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />

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
