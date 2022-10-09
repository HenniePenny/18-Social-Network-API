const {
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

const router = require("express").Router();

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
// router.get("/", getUsers)
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
