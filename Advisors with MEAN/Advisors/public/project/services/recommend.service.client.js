(function() {
    angular
        .module("CCISAdvisor")
        .factory("RecommendService", RecommendService);

    function RecommendService($http) {

        var api = {
            createRecommend: createRecommend

        };
        return api;

        function createRecommend(userId, recData) {
            console.log("clientside");
            var url = "/api/user/"+userId+"/recdata";
            return $http.post(url, recData);
        }

    }
})();