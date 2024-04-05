import Layout from "@/components/Layout";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();
  console.log({ session });

  useEffect(() => {
    if (status === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [status]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <Layout>
        <div>
          You are not signed in. <br />
          <button onClick={() => signIn()}>Sign in</button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="text-primary flex justify-between">
        <h2>Hello, {session?.user?.name}!</h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img
            src={session?.user?.image}
            alt=""
            className="w-6 h-6 rounded-full"
            key={session?.user?.image}
          />
          <span className="px-2 font-semibold">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
