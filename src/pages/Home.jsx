import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user, signOff, loading } = useAuth();
  console.log(user);

  const handleSignOff = async () => {
    try {
      await signOff();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <h1>Cargando</h1>
    )
  } else {
    return (
      <>
        <h1 className="text-2xl font-semibold text-yellow-300 text-center">Welcome: {user.displayName ?? user.email}</h1>
        <button
          onClick={handleSignOff}
        >
          Cerrar Sesión
        </button>
      </>
    );
  }
}

export default Home;