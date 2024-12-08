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

  const workoutDate = new Date(workout?.date).toDateString();

  return (
    <main>
      <h1>Workout Details</h1>
      {workout ? (
        <div>
          <ul>
            <li>{workout.workoutType} Workout</li>
            <li>{workout.duration} Minute</li>
            <li>{workoutDate}</li>
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default WorkoutDetails;
