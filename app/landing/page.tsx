/* Flow Chart Compatible File */
"use client";

/* Preload Function Start */
/* Imports */

import { useRouter } from "next/navigation";
import {useState} from "react";

/* Types */
/* Objects */
/* Effects */
/* Page Start Async Functions */

/* Preload Function End */

export default function Landing({/* Props */}) {
    {/* States */}
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    {/* Page Function Start */}

    {/* Sequence 1 Start */}
    const handleSignIn = ({/* Params */}) => {
        {/* Fetch Start */}
        fetch(`/api/users?username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)
            .then(response => {{/* Then */}
                {/* Response */}
                {/* If Else */}
                if (response.ok) {
                    {/* Router */}
                    router.push("/home");
                } else {
                    {/* Alert */}
                    alert("Invalid credentials");
                }
            })
            .catch(error => {{/* Catch */}
                {/* Console Error */}
                console.error("Error during sign-in:", error);
                {/* Alert */}
                alert("An error occurred during sign-in.");
            });
        {/* Fetch End */}
    };
    {/* Sequence 1 End */}

    return (
        <div id="page-container" className="flex flex-col items-center justify-center h-screen w-full py-2 bg-black-200">
            {/* Sign In Header */}
            <h1 id="element" className="text-3xl font-bold mb-6">Sign In</h1>
            {/* Email Input */}
            <input
                id="component"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded mb-4 w-64"
            />
            {/* Password Input */}
            <input
                id="component"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded mb-4 w-64"
            />
            {/* Sign In Button */}
            <button
                id="component"
                onClick={handleSignIn}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Sign In
            </button>
        </div>
    );
    {/* Page Function End */}
}