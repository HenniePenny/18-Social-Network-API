const { Thought } = require("../models");

module.exports = {
  //get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  //get a single thought by it's id
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "No thought found with that ID. 👀" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //post to create a new thought //!push created thought's id to associated user's thoughts array field
};

//put to update a thought by its id

//delete to remove a thought by its id

//!Post to create a reaction stored in a single thought's reactions field array

// Delete to pull and remove a reaction by the reaction's reactionId value
