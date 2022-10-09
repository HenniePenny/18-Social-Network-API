const {
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
} = require("../../controllers/userControllers");

const router = require("express").Router();

// /api/users
router.route("/").get(getUsers).post(createUser);

///api/users/:userId
// router.get("/", getUsers)
router.route("/:userId").get(getSingleUser).delete(deleteUser);

module.exports = router;
