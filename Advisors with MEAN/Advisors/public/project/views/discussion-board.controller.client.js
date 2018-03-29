(function(){
    angular
        .module("CCISAdvisor")
        .controller("DiscussionBoardController", DiscussionBoardController);

    function DiscussionBoardController($routeParams, $scope, $http, UserService) {
        var vm = this;
        vm.userId = $routeParams.userId;

        function init() {
            UserService
                .findUserById(vm.userId)
                .then(
                    function(response){
                        vm.user = response.data;
                    }
                )
        }
        init();
    }
})();