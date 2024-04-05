import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";
import { useState } from "react";

const Home = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  if (!session) {
    return (
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <p className="text-white mb-4">Please Log in to continue</p>
          <button
            className="bg-white p-2 px4 rounded-lg w-full sm:w-auto"
            onClick={(e) => {
              setIsLoading(true);
              signIn("google").finally(() => setIsLoading(false));
            }}
            disabled={isLoading}
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 min-h-screen flex">
      <Nav />
      <div
        className={`bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4 transition-all duration-300 ${
          !session ? "opacity-0" : "opacity-100"
        }`}
      >
        logged in as {session.user.email}
      </div>
    </div>
  );
};

export default Home;
