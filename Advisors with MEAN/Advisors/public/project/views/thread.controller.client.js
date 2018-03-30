(function(){
    angular
        .module("CCISAdvisor")
        .controller("ThreadController", ThreadController);

    function ThreadController($routeParams, ThreadService, UserService, $scope, $http, CommentService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.threadId = $routeParams.threadId;



        function init() {
            UserService
                .findUserById(vm.userId)
                .then(
                    function(response){
                        vm.user = response.data;
                    }
                )

            ThreadService
                .findThreadById(vm.threadId)
                .then(
                    function(response){
                        vm.thread = response.data;
                        CommentService
                            .findCommentsForThread(vm.threadId)
                            .then(
                                function(response){
                                    vm.comments = response.data;

                                    var newThread = {"query": vm.thread.query, "description": vm.thread.description, "course": vm.thread.course, "courseCategory": vm.thread.courseCategory, "numberOfComments": vm.thread.numberOfComments, "views": vm.thread.views + 1 , "dateTime": vm.thread.dateTime};

                                    ThreadService
                                        .updateThread(vm.threadId, newThread)
                                        .then(
                                            function (response) {

                                            },
                                            function (error) {
                                                vm.error = error.data;
                                            }
                                        )
                                }
                            )

                    }
                )


        }
        init();

    }
})();