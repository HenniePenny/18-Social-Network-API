const {
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
} = require("../../controllers/userController");

const router = require("express").Router();

// /api/users
router.route("/").get(getUsers).post(createUser);

///api/users/:userId
// router.get("/", getUsers)
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

module.exports = router;
