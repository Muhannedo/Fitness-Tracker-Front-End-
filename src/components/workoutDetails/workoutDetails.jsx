import { useParams } from "react-router-dom";
import * as workoutService from "../../services/workoutService";
import { useEffect, useState } from "react";

const WorkoutDetails = () => {
  const [workout, setWorkout] = useState(null);

  const { workoutId } = useParams();

  useEffect(() => {
    const fetchWorkout = async () => {
      const workoutData = await workoutService.show(workoutId);
      setWorkout(workoutData);
    };
    fetchWorkout();
  }, [workoutId]);

  return (
    <main>
      <h1>Workout Details</h1>
      {workout ? (
        <div>
          <h2>{workout.workoutType}</h2>
          <p>{workout.duration}</p>
          <p>{workout.date}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default WorkoutDetails;
