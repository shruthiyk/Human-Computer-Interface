module.exports = function(app, models) {

    var recommendModel = models.recommendModel;

    app.post("/api/user/:userId/recdata", createRecommendation);

    function createRecommendation(req, res) {

        console.log("PPPPPP=========>::"+JSON.stringify(req.body));
        var userId = req.params.userId;
        var newRecommendation = req.body;
        console.log("serverside"+JSON.stringify(newRecommendation));
        recommendModel
            .createRecommendModelForUser(userId, newRecommendation)
            .then(
                function (newRecommendation) {
                    res.json(newRecommendation);
                },
                function (error) {
                    res.statusCode(400).send(error);
                }
            )
    }
};