import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <h1 className="text-2xl font-semibold text-yellow-300 text-center">Welcome: {user.email}</h1>
  );
}

export default Home;