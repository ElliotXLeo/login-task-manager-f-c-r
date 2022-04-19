import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<h1 className="text-8xl font-semibold text-yellow-300 text-center">Login</h1>} />
          <Route index element={<h1 className="text-8xl font-semibold text-yellow-300 text-center">Home</h1>} />
          <Route path="*" element={<h1 className="text-8xl font-semibold text-yellow-300 text-center">404</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
