(function(){
    angular
        .module("CCISAdvisor")
        .controller("HomeController", HomeController);

    function HomeController($routeParams, ThreadService, $scope, $http) {
        var vm = this;
        vm.userId = $routeParams.userId;

        function init() {
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