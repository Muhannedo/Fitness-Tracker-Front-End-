import { useState } from "react";

const ExerciseForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    reps: "",
    sets: "",
    weight: "",
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddExercise(formData);
    setFormData({
      name: "",
      reps: "",
      sets: "",
      weight: "",
    });
  };
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
      <button type="submit">Add Exercise</button>
    </form>
  );
};

export default ExerciseForm;
