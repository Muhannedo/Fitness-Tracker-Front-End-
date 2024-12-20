// App.jsx

import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import * as authService from "../src/services/authService"; // import the authservice
import * as workoutService from "../src/services/workoutService"; // import the workoutService
import Dashboard from "./components/Dashboard/Dashboard";
import SignupForm from "./components/SignupForm/SignupForm";
import SigninForm from "./components/SigninForm/SigninForm";
import WorkoutList from "./components/workoutList/workoutList";
import WorkoutDetails from "./components/workoutDetails/workoutDetails";
import WrokoutForm from "./components/workoutFrom/workoutFrom";
import ExerciseForm from "./components/ExerciseForm/ExerciseFrom";

const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(authService.getUser());
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchAllWorkouts = async () => {
      const workoutsData = await workoutService.index();
      setWorkouts(workoutsData);
    };
    if (user) fetchAllWorkouts();
  }, [user]);

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  const handleAddWorkout = async (workoutFormData) => {
    const newWorkout = await workoutService.create(workoutFormData);
    setWorkouts([newWorkout, ...workouts]);
    navigate("/workouts");
  };

  const handleDeleteWorkout = async (workoutId) => {
    const deletedWorkout = await workoutService.destroy(workoutId);
    setWorkouts(woorkout.filter((workout) => workout._id !== workoutId));
    navigate("/workouts");
  };

  const handleUpdateWorkout = async (workoutId, workoutFormData) => {
    const updatedWorkout = await workoutService.update(
      workoutId,
      workoutFormData
    );

    setWorkouts(
      workouts.map((workout) =>
        workoutId === workout._id ? updatedWorkout : workout
      )
    );

    navigate(`/workouts/${workoutId}`);
  };
  return (
    <>
      <NavBar user={user} handleSignout={handleSignout} />
      <Routes>
        {user ? (
          // if user is logged in, show the dashboard and workout list
          <>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route
              path="/workouts"
              element={<WorkoutList workouts={workouts} />}
            />
            <Route path="/workouts/:workoutId" element={<WorkoutDetails />} />
            <Route
              path="/workouts/new"
              element={<WrokoutForm handleAddWorkout={handleAddWorkout} />}
            />
            <Route
              path="/workouts/:workoutId/edit"
              element={
                <WrokoutForm handleUpdateWorkout={handleUpdateWorkout} />
              }
            />

            <Route
              path="/workouts/:workoutid"
              element={
                <WorkoutDetails handleDeleteWorkout={handleDeleteWorkout} />
              }
            />

            <Route
              path="/workouts/:workoutId/exercises/:exerciseId/edit"
              element={
                <ExerciseForm handleUpdateWorkout={handleUpdateWorkout} />
              }
            />
          </>
        ) : (
          // if user is not logged in, show the landing page
          <Route path="/" element={<Landing />} />
        )}
        <Route path="/signup" element={<SignupForm setUser={setUser} />} />
        <Route path="/signin" element={<SigninForm setUser={setUser} />} />
      </Routes>
    </>
  );
};

export default App;
