import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user, signOff, loading } = useAuth();

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
      <section className="flex w-4/5 max-w-xs">
        <div className="flex flex-col gap-4 bg-white shadow-md rounded p-4">
          <h1 className="text-2xl font-semibold text-center">
            Welcome: {user.displayName ?? user.email}
          </h1>
          <button
            onClick={handleSignOff}
            className="bg-blue-800 hover:bg-blue-900 py-2 rounded text-white font-bold"
          >
            Cerrar Sesión
          </button>
        </div>
      </section>
    );
  }
}

export default Home;