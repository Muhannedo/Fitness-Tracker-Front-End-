const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/workouts`;

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
const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
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
export { index, create, show, update };
