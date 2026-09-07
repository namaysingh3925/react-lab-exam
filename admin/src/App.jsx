import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import ProtectedRoute from "./components/Protectedroutes";

import "./App.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        >

          <Route path="users" element={<Users />} />

          <Route path="reports" element={<Reports />} />

          <Route path="settings" element={<Settings />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
