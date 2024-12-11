import { Link } from "react-router-dom";

const WorkoutList = (props) => {
  return (
    <>
      <main>
        <h1>Workout List</h1>

        {props.workouts.map((workout) => (
          <Link key={workout._id} to={`/workouts/${workout._id}`}>
            <header className="workout-header">
              <div>
                <ul>
                  <li>
                    {workout.workoutType} - {workout.duration} Min
                  </li>
                </ul>
              </div>
            </header>
          </Link>
        ))}
      </main>
    </>
  );
};

export default WorkoutList;
