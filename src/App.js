import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-slate-100">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<h1 className="text-8xl font-semibold text-yellow-300 text-center">404</h1>} />
          </Routes>
        </Router>
      </AuthProvider>
    </main>
  );
}

export default App;
