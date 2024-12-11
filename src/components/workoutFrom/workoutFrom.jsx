import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as workoutService from "../../services/workoutService";
import "./workoutFrom.css";

const WorkoutForm = (props) => {
  const [formData, setFormData] = useState({
    date: "",
    workoutType: "",
    duration: "",
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (workoutId) {
      props.handleUpdateWorkout(workoutId, formData);
    } else {
      props.handleAddWorkout(formData);
    }
  };

  const { workoutId } = useParams();

  useEffect(() => {
    const fetchWorkout = async () => {
      const workoutData = await workoutService.show(workoutId);
      setFormData(workoutData);
    };
    if (workoutId) fetchWorkout();
  }, [workoutId]);

  return (
    <main className="WorkoutForm">
      <form onSubmit={handleSubmit}>
        <h1>{workoutId ? "Edit Workout" : "New Workout"}</h1>

        <label htmlFor="date">Date:</label>
        <input
          required
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
        />

        <label htmlFor="workoutType">Workout Type:</label>
        <input
          required
          type="text"
          name="workoutType"
          id="workoutType"
          value={formData.workoutType}
          onChange={handleChange}
        />

        <label htmlFor="duration">Duration (minutes):</label>
        <input
          required
          type="number"
          name="duration"
          id="duration"
          value={formData.duration}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default WorkoutForm;
