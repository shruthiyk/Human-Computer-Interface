(function(){
    angular
        .module("CCISAdvisor")
        .controller("HomeController", HomeController);

    function HomeController($location,$routeParams, ThreadService, UserService,RecommendService, $scope, $http) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.hasData=hasData;

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

        function hasData() {
            RecommendService
                .fetchRecommend(vm.userId)
                .then(
                    function(response){
                        vm.recommendData=response.data;
                        if(vm.recommendData.length<0){
                            $location.url("/user/"+ vm.userId+"/questionnare" );
                        }else
                        {
                            $location.url("/user/"+ vm.userId+"/courses" );
                        }

                    })

        }


    }
})();