const {
  getAllThoughts,
  getSingleThought,
  createThought,
} = require("../../controllers/thoughtController");

const router = require("express").Router();

// /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought);

// /api/thoughts/:thoughtId/reactions
