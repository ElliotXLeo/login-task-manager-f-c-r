import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <>
      {error && <Error error={error} />}

      <form
        onSubmit={handleSubtmit}
      >
        <input
          type="email"
          placeholder="Email"
          id="loginEmail"
          name="login-email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          id="loginPassword"
          name="login-password"
          value={password}
          onChange={handleChange}
          required
        />
        <button>Iniciar sesión</button>
      </form>


      <button
        onClick={handleGoogleSignIn}
      >
        Iniciar sesión con Google
      </button>
    </>
  );
}

export default Login;