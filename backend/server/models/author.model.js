const mongoose = require("mongoose");

const AuthorManagerSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Author must be 3 Characters Long "],
			minLength: [3, "Author must be 3 Characters Long "]
		},


	},
	{ timestamps: true }
);

const Authors = mongoose.model("Authors", AuthorManagerSchema);

module.exports = Authors;