(function() {
    angular
        .module("CCISAdvisor")
        .controller("questionaireControllerClient", questionaireControllerClient);

    function questionaireControllerClient($routeParams, $scope, $http, UserService, ThreadService,RecommendService, $location) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.setData = setData;

        function init() {
            console.log("PPPP"+vm.userId);
            UserService
                .findUserById(vm.userId)
                .then(
                    function(response){
                        vm.user = response.data;
                    }
                )

        }
        init();


        function setData(){

            var recdata = {"project_like": vm.result,
                "team_like": vm.result2,
                "exams_or_assignments": vm.result3,
                "research_paper": vm.result4};
            console.log("Pranav:::"+ JSON.stringify(recdata));
            RecommendService
                .createRecommend(vm.userId, recdata)
                .then(
                    function (response) {
                        $location.url("/user/" + vm.userId+"/grades");
                    },
                    function (error) {
                        vm.error = error.data;
                    }
                )


        }
    }
})();