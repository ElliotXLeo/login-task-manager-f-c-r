import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../components/sections/Error";
import useAuth from "../hooks/useAuth";

const Register = () => {

  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    registerEmail: '',
    registerPassword: ''
  });
  const [error, setError] = useState('');

  const { email, password } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    });
  };

  const handleSubtmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(user);
      setError('');
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="flex flex-col gap-6 w-4/5 max-w-xs">
      <h2 className="text-8xl text-center">📋</h2>
      <h2 className="text-2xl font-semibold text-center">Registro</h2>
      <form
        onSubmit={handleSubtmit}
        className="flex flex-col gap-4 bg-white shadow-md rounded p-4"
      >
        <input
          type="email"
          placeholder="Email"
          id="registerEmail"
          name="register-email"
          value={email}
          onChange={handleChange}
          className="shadow border rounded p-2 focus:outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          id="registerPassword"
          name="register-password"
          value={password}
          onChange={handleChange}
          className="shadow border rounded p-2 focus:outline-none"
          required
        />
        <button className="bg-blue-800 hover:bg-blue-900 py-2 rounded text-white font-bold">
          Registrar
        </button>

        <div className="flex items-center justify-between">
          <p className="text-sm">Ya tengo cuenta</p>
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded text-white text-sm font-bold">
            Login
          </Link>
        </div>
      </form>

      {error && <Error error={error} />}
    </section>
  );
}

export default Register;