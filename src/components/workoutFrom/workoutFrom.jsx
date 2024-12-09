import { useState } from "react";

const WrokoutForm = (props) => {
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
    props.handleAddWorkout(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date-input">Date</label>
      <input
        type="date"
        id="date-input"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <lablel htmlFor="workoutType-input">Workout Type</lablel>
      <input
        type="text"
        id="workoutType-input"
        name="workoutType"
        value={formData.workoutType}
        onChange={handleChange}
      />
      <label htmlFor="duration-input">Duration</label>
      <input
        type="number"
        id="duration-input"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default WrokoutForm;
