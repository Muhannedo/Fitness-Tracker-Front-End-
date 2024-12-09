const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/exercises`;

// ========= Protected Routes =========

//router.use(verifyToken);

//  All recipes
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

// create Exercise
const create = async (exercise) => {
  try {
    const res = await fetch(BASE_URL, {
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

// show by id
const show = async (exerciseId) => {
  try {
    const res = await fetch(`${BASE_URL}/${exerciseId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// update exercise
async function update(id, exercise) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
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
}

//  Delete a exercise
async function deleteExercise(exerciseId) {
  try {
    const res = await fetch(`${BASE_URL}/${exerciseId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export { index, create, show, update, deleteExercise };
