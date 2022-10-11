const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  removeThought,
} = require("../../controllers/thoughtController");

const router = require("express").Router();

// /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(removeThought);

// /api/thoughts/:thoughtId/reactions
module.exports = router;
