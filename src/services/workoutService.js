const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/workouts`;

// ========= Protected Routes =========

// ---------- Workout management -------------
//  All workouts
const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

//  Create a workout
const create = async (workout) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(workout),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// show by id
const show = async (workoutId) => {
  try {
    const res = await fetch(`${BASE_URL}/${workoutId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// update workout
async function update(id, workout) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(workout),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

//  Delete a workout
async function deleteWorkout(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

// ------- Exercise Management --------

//  Create an exercise
const createExercise = async (workoutId, exercise) => {
  try {
    const res = await fetch(`${BASE_URL}/${workoutId}/exercises`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(exercise),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// delete Exercise
const deleteExercise = async (workoutId, exerciseId) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${workoutId}/exercises/${exerciseId}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// Update Exercise
const updateExercise = async (workoutId, exerciseId, exerciseFormData) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${workoutId}/exercises/${exerciseId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(exerciseFormData),
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export {
  index,
  create,
  show,
  update,
  deleteWorkout,
  createExercise,
  deleteExercise,
  updateExercise,
};
