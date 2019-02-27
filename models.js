"use strict";

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const dbFruits = mongoose.Schema({
  name : {type : String, required : true},
  color : {type : String, required : true},
  size : {type: String, required: true}
});

blogSchema.methods.serialize = function() {
  return {
    id: this._id,
    name: this.name,
    color: this.color,
    size: this.size
  };
};

const Fruits = mongoose.model("Fruits", dbFruits);

module.exports = { Fruits };