const {
  getUsers,
  createUser,
  getSingleUser,
} = require("../../controllers/userControllers");

const router = require("express").Router();

// /api/users
router.route("/").get(getUsers).post(createUser);
// router.get("/", getUsers)
router.route("/:userId").get(getSingleUser);

module.exports = router;
