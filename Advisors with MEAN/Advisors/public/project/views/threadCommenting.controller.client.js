(function(){
    angular
        .module("CCISAdvisor")
        .controller("ThreadCommentingController", ThreadCommentingController);

    function ThreadCommentingController($routeParams, ThreadService, UserService, $scope, $http, CommentService, $location) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.threadId = $routeParams.threadId;

        vm.createComment = createComment;
        vm.fullDateTime = fullDateTime;

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
                                }
                            )
                    }
                )


        }
        init();

        function createComment(comment){
            if(comment != "") {
                var newComment = {"comments": comment, "user": vm.userId, "likes": 0, "dislikes": 0, "dateTime": fullDateTime(), "username": vm.user.username, "userReputationPoints": vm.user.reputationPoints};
                CommentService
                    .createComment(vm.threadId, newComment)
                    .then(
                        function (response) {
                            ThreadService
                                .findThreadById(vm.threadId)
                                .then(
                                    function(response){
                                        vm.thread = response.data;

                                        var newThread = {"query": vm.thread.query, "description": vm.thread.description, "course": vm.thread.course, "courseCategory": vm.thread.courseCategory, "numberOfComments": vm.thread.numberOfComments + 1 , "views": vm.thread.views - 1, "dateTime": vm.thread.dateTime};

                                        ThreadService
                                            .updateThread(vm.threadId, newThread)
                                            .then(
                                                function (response) {
                                                    $location.url("/user/" + vm.userId + "/thread/" + vm.threadId);
                                                },
                                                function (error) {
                                                    vm.error = error.data;
                                                }
                                            )
                                    }
                                )

                        },
                        function (error) {
                            vm.error = error.data;
                        }
                    )
            }else{
                vm.error = "Comments are Required";
            }
        }

        function fullDateTime() {
            var d = new Date();
            var n = d.toLocaleString([], { hour12: true});
            return n;
        }

    }
})();