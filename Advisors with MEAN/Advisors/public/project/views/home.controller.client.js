(function(){
    angular
        .module("CCISAdvisor")
        .controller("HomeController", HomeController);

    function HomeController($routeParams, ThreadService, UserService, $scope, $http) {
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

            ThreadService
                .findThreadsForUser(vm.userId)
                .then(
                    function(response){
                        vm.threads = response.data;
                    }
                )
        }
        init();


    }
})();