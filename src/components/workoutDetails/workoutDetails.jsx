import { useParams } from "react-router-dom";
import * as workoutService from "../../services/workoutService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExerciseForm from "../ExerciseForm/ExerciseFrom";
import "./workoutDetails.css";

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

  // Exercises

  const handleAddExercise = async (exerciseFormData) => {
    const newExercise = await workoutService.createExercise(
      workoutId,
      exerciseFormData
    );
    setWorkout({ ...workout, exercise: [...workout.exercise, newExercise] });
  };

  const handleDeleteExercise = async (exerciseId) => {
    await workoutService.deleteExercise(workoutId, exerciseId);
    setWorkout({
      ...workout,
      exercise: workout.exercise.filter(
        (exercise) => exercise._id !== exerciseId
      ),
    });
  };

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
      <section>
        <h2>Add Your Exercise:</h2>
        {workout ? (
          <ul>
            {workout.exercise.map((exercise) => (
              <li key={exercise._id}>
                {exercise.name} - {exercise.reps} reps - {exercise.sets} sets -
                {exercise.weight} KGs
                <br />
                <Link
                  to={`/workouts/${workoutId}/exercises/${exercise._id}/edit`}
                >
                  Edit
                </Link>
                <button onClick={() => handleDeleteExercise(exercise._id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
        <ExerciseForm handleAddExercise={handleAddExercise} />
      </section>
    </main>
  );
};

export default WorkoutDetails;
