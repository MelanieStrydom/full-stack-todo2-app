const mongoose = require("mongoose");

//Schema -> structure of our document (equivalent table in Relational Database). 

const TodoSchema = mongoose.Schema({

    text: {type: String, required: true}
})


const TodoModel = mongoose.model("todos", TodoSchema);

module.exports = TodoModel;