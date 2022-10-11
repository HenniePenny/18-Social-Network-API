const {
  getAllThoughts,
  getSingleThought,
} = require("../../controllers/thoughtController");

const router = require("express").Router();

// /api/thoughts
router.route("/").get(getAllThoughts).get(getSingleThought);

// /api/thoughts/:thoughtId/reactions
