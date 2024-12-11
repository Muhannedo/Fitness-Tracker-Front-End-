import { Link } from "react-router-dom";
import "./workoutList.css";
const WorkoutList = (props) => {
  return (
    <>
      <main>
        <h1>Workout List</h1>

        <header className="workout-item-header">
          <div>
            <ul className="workout-item-list">
              {props.workouts.map((workout) => (
                <Link
                  key={workout._id}
                  to={`/workouts/${workout._id}`}
                  className="workout-link"
                >
                  <li className="workout-item">
                    {workout.workoutType} - {workout.duration} Min
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </header>
      </main>
    </>
  );
};

export default WorkoutList;
