import { Link } from "react-router-dom";

const WorkoutList = ({ props }) => {
  return (
    <div>
      <h1>Workout List</h1>
      <ul>
        {props.workouts.map((workout) => (
          <li key={workout.id}>
            <Link to={`/workouts/${workout.id}`}>{workout.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;
