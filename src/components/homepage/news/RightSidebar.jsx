"use client";

import { createAuthClient } from "better-auth/client";
import { FaGoogle, FaGithub } from "react-icons/fa";

// Initialize client after imports
const authClient = createAuthClient();

const RightSidebar = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  }; 
  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
    console.log(data);
  }; 

  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Login with</h2>
      <div className="flex flex-col gap-2">
        <button
          onClick={handleGoogleSignIn}
          className="btn border-blue-500 text-blue-500"
        >
          <FaGoogle /> Login with Google
        </button>
        <button onClick={handleGithubSignIn} className="btn border-black text-black">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;