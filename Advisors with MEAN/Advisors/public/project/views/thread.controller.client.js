(function(){
    angular
        .module("CCISAdvisor")
        .controller("ThreadController", ThreadController);

    function ThreadController($routeParams, ThreadService, UserService, $scope, $http, CommentService, $location, $window) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.threadId = $routeParams.threadId;

        vm.updateThreadForUpVote = updateThreadForUpVote;
        vm.updateThreadForDownVote = updateThreadForDownVote;

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

                                    var newThread = {"query": vm.thread.query, "description": vm.thread.description, "course": vm.thread.course, "courseCategory": vm.thread.courseCategory, "numberOfComments": vm.thread.numberOfComments, "views": vm.thread.views + 1 , "dateTime": vm.thread.dateTime, "userReputationPoints": vm.thread.userReputationPoints};

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


        function updateThreadForUpVote(commentId){
            CommentService
                .findCommentById(commentId)
                .then(
                    function(response){
                        vm.getComment = response.data;

                        var newComment = {"comments": vm.getComment.comments, "user": vm.getComment.user, "likes": vm.getComment.likes + 1, "dislikes": vm.getComment.dislikes, "dateTime": vm.getComment.dateTime, "username": vm.getComment.username, "userReputationPoints": vm.getComment.userReputationPoints};

                        CommentService
                            .updateComment(commentId, newComment)
                            .then(
                                function (response) {
                                    $window.location.reload();
                                    var newUser = {"reputationPoints": vm.user.reputationPoints + 1};
                                    UserService
                                        .updateUser(vm.userId, newUser)
                                        .then(
                                            function(response){
                                                
                                            },
                                            function(error){
                                                vm.error = error.data;
                                            }
                                        )
                                },
                                function (error) {
                                    vm.error = error.data;
                                }
                            )
                    }
                )
        }

        function updateThreadForDownVote(commentId){
            CommentService
                .findCommentById(commentId)
                .then(
                    function(response){
                        vm.getComment = response.data;

                        var newComment = {"comments": vm.getComment.comments, "user": vm.getComment.user, "likes": vm.getComment.likes, "dislikes": vm.getComment.dislikes + 1, "dateTime": vm.getComment.dateTime, "username": vm.getComment.username, "userReputationPoints": vm.getComment.userReputationPoints};

                        CommentService
                            .updateComment(commentId, newComment)
                            .then(
                                function (response) {
                                    $window.location.reload();
                                    var newUser = {"reputationPoints": vm.user.reputationPoints - 1};
                                    UserService
                                        .updateUser(vm.userId, newUser)
                                        .then(
                                            function(response){

                                            },
                                            function(error){
                                                vm.error = error.data;
                                            }
                                        )
                                },
                                function (error) {
                                    vm.error = error.data;
                                }
                            )
                    }
                )
        }

    }
})();