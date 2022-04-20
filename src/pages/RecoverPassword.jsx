import { useState } from "react";
import { Link } from "react-router-dom";
import Error from "../components/sections/Error";
import useAuth from "../hooks/useAuth";

const RecoverPassword = () => {
  const { resetPassword } = useAuth();

  const [user, setUser] = useState({
    loginEmail: ''
  });
  const [error, setError] = useState('');

  const { loginEmail } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    });
  };

  const handleSubtmit = async (e) => {
    e.preventDefault();
    if (loginEmail) {
      setError(false);
      try {
        await resetPassword(user);
        setError('Revisar su correo');
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError('Ingrese un correo')
    }
  };

  return (
    <section className="flex flex-col gap-6 w-4/5 max-w-xs">
      <h2 className="text-8xl text-center">📋</h2>
      <h2 className="text-2xl font-semibold text-center">Login</h2>
      <form
        onSubmit={handleSubtmit}
        className="flex flex-col gap-4 bg-white shadow-md rounded p-4"
      >
        <input
          type="email"
          placeholder="Email"
          id="loginEmail"
          name="login-email"
          value={loginEmail}
          onChange={handleChange}
          className="shadow border rounded p-2 focus:outline-none"
          required
        />
        <div className="flex items-center justify-between">
          <button className="bg-blue-800 hover:bg-blue-900 py-2 px-4 rounded text-white font-bold">
            Recuperar
          </button>
          <Link
            to="/login"
            className="text-xs text-blue-500 hover:text-blue-800 font-bold"
          >
            ¿Ya tienes cuenta?
          </Link>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm">No tengo cuenta</p>
          <Link
            to="/register"
            className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded text-white text-sm font-bold">
            Registrar
          </Link>
        </div>
      </form>
      {error && <Error error={error} />}
    </section>
  );
}

export default RecoverPassword;