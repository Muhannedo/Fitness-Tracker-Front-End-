// App.jsx

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import * as authService from "../src/services/authService"; // import the authservice
import Dashboard from "./components/Dashboard/Dashboard";
import SignupForm from "./components/SignupForm/SignupForm";
import SigninForm from "./components/SigninForm/SigninForm";
import WorkoutList from "./components/workoutList";

const App = () => {
  const [user, setUser] = useState(authService.getUser());

  return (
    <>
      <NavBar user={user} />
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/workouts" element={<WorkoutList />} />
          </>
        ) : (
          <Route path="/" element={<Landing user={user} />} />
        )}
        <Route path="/signup" element={<SignupForm setUser={setUser} />} />
        <Route path="/signin" element={<SigninForm setUser={setUser} />} />
      </Routes>
    </>
  );
};

export default App;
