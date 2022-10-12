const { Thought, User } = require("../models");

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
  //post to create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Thought created, but no user found with this id. 👀",
            })
          : res.json("The thought was created. 👍")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    //! send userId and/or thoughtId in params
    //   //!push thought's id to associated user's thought array ?? does this work?
    //   .then(({ _id }) => {
    //     return User.findOneAndUpdate(
    //       { _id: req.params.userId },
    //       { $push: { thoughts: _id } },
    //       { runValidators: true, new: true }
    //     );
    //   })
    //   .then((thought) => res.json(thought))
    //   .catch((err) => {
    //     console.log(err);
    //     return res.status(500).json(err);
    //   });
    // User.findOneAndUpdate(
    //   { _id: req.body.userId },
    //   { $push: { thoughts: req.body.thoughtId } },
    //   { runValidators: true, new: true }
    // )
    //   .then((thought) =>
    //     !thought
    //       ? res
    //           .status(404)
    //           .json({ message: "No data found to display here. 👀" })
    //       : res.json(thought)
    //   )
    //   .catch((err) => res.status(500).json(err));
  },
  //put to update a thought by its id
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { $set: req.body.createdAt },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "No thought found with this id. 👀" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //delete to remove a thought by its id
  removeThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { thoughts: req.params.thoughtId } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "No thought found with this id. 👀" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //!Post to create a reaction stored in a single thought's reactions field array
  // createReaction(req, res) {
  //   Thought.findOneAndUpdate(
  //     { _id: req.params.thoughtId },
  //     { $addToSet: { reactions: req.body.thoughtId } },
  //     { runValidators: true, new: true }
  //   );
  // },
};

// Delete to pull and remove a reaction by the reaction's reactionId value
