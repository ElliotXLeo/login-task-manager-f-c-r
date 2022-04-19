import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {

  const { signIn } = useAuth();
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

  return (
    <>
      {error && <div>{error}</div>}

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
    </>
  );
}

export default Login;