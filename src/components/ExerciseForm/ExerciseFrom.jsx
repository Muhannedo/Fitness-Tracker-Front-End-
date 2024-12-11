import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as workoutService from "../../services/workoutService";

const ExerciseForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    reps: "",
    sets: "",
    weight: "",
  });
  const [trigger, setTrigger] = useState();
  const { workoutId, exerciseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkout = async () => {
      const workoutData = await workoutService.show(workoutId);
      console.log(workoutData);
      setFormData(
        workoutData.exercise.find((exercise) => exercise._id === exerciseId)
      );
    };
    if (workoutId && exerciseId) fetchWorkout();
  }, [workoutId, exerciseId, trigger]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (workoutId && exerciseId) {
      workoutService.updateExercise(workoutId, exerciseId, formData);
      navigate(`/workouts/${workoutId}`);
    } else {
      await props.handleAddExercise(formData);
      window.location.reload();
      setTrigger(!trigger);
    }
    setFormData({
      name: "",
      reps: "",
      sets: "",
      weight: "",
    });
  };

  if (workoutId && exerciseId)
    return (
      <main>
        <form className="EditExerciseForm" onSubmit={handleSubmit}>
          <h1>Edit Exercise</h1>
          <label htmlFor="name-input">Name:</label>
          <input
            required
            type="text"
            name="name"
            id="name-input"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="reps-input">Reps:</label>
          <input
            required
            type="number"
            name="reps"
            id="reps-input"
            value={formData.reps}
            onChange={handleChange}
          />
          <label htmlFor="sets-input">Sets:</label>
          <input
            required
            type="number"
            name="sets"
            id="sets-input"
            value={formData.sets}
            onChange={handleChange}
          />
          <label htmlFor="weight-input">Weight:</label>
          <input
            required
            type="number"
            name="weight"
            id="weight-input"
            value={formData.weight}
            onChange={handleChange}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </main>
    );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">Name:</label>
      <input
        required
        type="text"
        name="name"
        id="name-input"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="reps-input">Reps:</label>
      <input
        required
        type="number"
        name="reps"
        id="reps-input"
        value={formData.reps}
        onChange={handleChange}
      />
      <label htmlFor="sets-input">Sets:</label>
      <input
        required
        type="number"
        name="sets"
        id="sets-input"
        value={formData.sets}
        onChange={handleChange}
      />
      <label htmlFor="weight-input">Weight:</label>
      <input
        required
        type="number"
        name="weight"
        id="weight-input"
        value={formData.weight}
        onChange={handleChange}
      />
      <button type="submit" className="submitExercise">
        ADD EXERCISE
      </button>
    </form>
  );
};

export default ExerciseForm;
