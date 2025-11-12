"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "../components/FromInput";
import FormSelect from "../components/FormSelect";
import Header from "../components/Header";

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
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>Welcome to Bonanza</h1>
        <div className="bg-bonanza-yellow px-30 py-8 rounded-lg shadow-md w-full max-w-md">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <FormInput
              label="Username:"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
            <FormSelect
              label="Choose your level or role:"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              options={[
                { value: "expert", label: "Expert" },
                { value: "beginner", label: "Beginner" },
                { value: "spectator", label: "Spectator" },
              ]}
            />


            <button type="submit">Start</button>
          </form>
        </div>
      </div>
    </div>
  );
}
