module.exports = function() {
    var mongoose = require("mongoose");

    var RecommendSchema = mongoose.Schema({
        _user: {type: mongoose.Schema.ObjectId, ref: "User"},
        project_like: String,
        team_like: String,
        exam_or_assignment: String,
        research_paper: String,
    }, {collection: "hci.recommend"});

    return RecommendSchema;
};