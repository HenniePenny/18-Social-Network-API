const { Schema, Types } = require("mongoose");
const { format_date } = require("../utils/helper");

const reactionSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(), //this has to be a class
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: format_date,
  },
  username: {
    type: String,
    required: true,
  },
});

module.exports = reactionSchema;
