(function(){
    angular.module("CCISAdvisor")
        .config(Config);
    
    function Config($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "/project/views/login.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "/project/views/register.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/user/:userId", {
                templateUrl: "/project/views/home.html",
                controller: "HomeController",
                controllerAs: "model",
                resolve: {
                    loggedIn: checkLoggedIn
                }
            })
            .when("/home", {
                templateUrl: "/project/views/home.html"
                //controller: "LoginController",
                //controllerAs: "model"
            })
            .when("/forgotPassword", {
                templateUrl: "/project/views/forgot-password.html"
                //controller: "LoginController",
                //controllerAs: "model"
            })
            .when("/questionnare", {
                templateUrl: "/project/views/questionaire.html"
                //controller: "LoginController",
                //controllerAs: "model"
            })
            .when("/grades", {
                templateUrl: "/project/views/grades.html"
                //controller: "LoginController",
                //controllerAs: "model"
            })
            .when("/courses", {
                templateUrl: "/project/views/courses.html"
                //controller: "LoginController",
                //controllerAs: "model"
            })
            .when("/discussionBoard", {
                templateUrl: "/project/views/discussion-board.html"
                //controller: "LoginController",
                //controllerAs: "model"
            })
            .when("/viewThreads", {
                templateUrl: "/project/views/viewThreads.html"
                //controller: "LoginController",
                //controllerAs: "model"
            })
            .when("/postingNewThread", {
                templateUrl: "/project/views/postingNewThread.html"
                //controller: "LoginController",
                //controllerAs: "model"
            })
            .when("/queryConfirmation", {
                templateUrl: "/project/views/queryCofirmation.html"
                //controller: "LoginController",
                //controllerAs: "model"
            })
            .when("/question1", {
                templateUrl: "/project/views/question1.html"
                //controller: "LoginController",
                //controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/login"
            });
    }

function checkLoggedIn(UserService, $location, $q, $rootScope) {
    var deferred = $q.defer();
    UserService
        .checkLoggedIn()
        .then(
            function(response) {
                var user = response.data;
                if(user == '0') {
                    $rootScope.currentUser = null;
                    deferred.reject();
                    $location.url("/login");
                } else {
                    $rootScope.currentUser = user;
                    deferred.resolve();
                }
            },
            function(err) {
                $location.url("/login");
            }
        );
    return deferred.promise;
}
})();
