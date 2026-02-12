"use client";

import { useRouter } from "next/navigation";
import {useState} from "react";

export default function Landing() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {
        // Use the API route to validate user credentials
        fetch(`/api/users?username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)
            .then(response => {
                if (response.ok) {
                    router.push("/home");
                } else {
                    alert("Invalid credentials");
                }
            })
            .catch(error => {
                console.error("Error during sign-in:", error);
                alert("An error occurred during sign-in.");
            });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full py-2 bg-black-200">
            <h1 className="text-3xl font-bold mb-6">Sign In</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded mb-4 w-64"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded mb-4 w-64"
            />
            <button
                onClick={handleSignIn}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Sign In
            </button>
        </div>
    );
}
