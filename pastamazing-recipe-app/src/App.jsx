import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// Import your refactored components
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RegistrationForm from './components/RegistrationForm'; // From your earlier task

// Initialize the QueryClient
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <nav style={navStyle}>
            <Link style={linkStyle} to="/">Home (Recipes)</Link>
            <Link style={linkStyle} to="/add">Add Recipe</Link>
            <Link style={linkStyle} to="/register">Register</Link>
          </nav>

          <hr />

          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/add" element={<AddRecipeForm />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

// Basic styles for navigation
const navStyle = {
  display: 'flex',
  gap: '20px',
  padding: '1rem',
  background: '#f4f4f4'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold'
};

export default App;