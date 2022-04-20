import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <>
      {error && <Error error={error} />}

      <form
        onSubmit={handleSubtmit}
      >
        <input
          type="email"
          placeholder="Email"
          id="registerEmail"
          name="register-email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          id="registerPassword"
          name="register-password"
          value={password}
          onChange={handleChange}
          required
        />
        <button>Registrar</button>
      </form>
    </>
  );
}

export default Register;