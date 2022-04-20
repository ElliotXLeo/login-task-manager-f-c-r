import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../components/sections/Error";
import useAuth from "../hooks/useAuth";

const Login = () => {

  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    loginEmail: '',
    loginPassword: ''
  });
  const [error, setError] = useState('');

  const { loginEmail, loginPassword } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    });
  };

  const handleSubtmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(user);
      setError('');
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      setError('');
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  }

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
        <input
          type="password"
          placeholder="Password"
          id="loginPassword"
          name="login-password"
          value={loginPassword}
          onChange={handleChange}
          className="shadow border rounded p-2 focus:outline-none"
          required
        />
        <div className="flex items-center justify-between">
          <button className="bg-blue-800 hover:bg-blue-900 py-2 px-4 rounded text-white font-bold">
            Login
          </button>
          <Link
            to="/recover-password"
            // onClick={handleResetPassword}
            className="text-xs text-blue-500 hover:text-blue-800 font-bold"
          >
            ¿Olvidaste tu contraseña?
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
      <button
        onClick={handleGoogleSignIn}
        className="bg-slate-50 hover:bg-slate-100 shadow border rounded py-2"
      >
        Iniciar sesión con Google
      </button>
      {error && <Error error={error} />}
    </section>
  );
}

export default Login;