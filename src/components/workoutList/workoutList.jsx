import { Link } from "react-router-dom";

const WorkoutList = (props) => {
  return (
    <>
      <main>
        <h1>Workout List</h1>
        {props.workouts.map((workout) => (
          <Link key={workout._id} to={`/workouts/${workout._id}`}>
            <article>
              <header>
                <h2>
                  {workout.workoutType} {workout.duration} Min
                </h2>
              </header>
            </article>
          </Link>
        ))}
      </main>
    </>
  );
};

export default WorkoutList;
