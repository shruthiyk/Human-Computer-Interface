(function(){
    angular
        .module("CCISAdvisor")
        .factory("UserService", UserService);

    function UserService($http){
        var api = {
            createUser : createUser,
            findUserById : findUserById,
            findUserByUsername : findUserByUsername,
            findUserByCredentials : findUserByCredentials,
            updateUser : updateUser,
            deleteUser: deleteUser,
            login: login,
            logout: logout,
            checkLoggedIn: checkLoggedIn,
            register: register
        }
        return api;

        function checkLoggedIn() {
            var url = "/api/loggedIn";
            return $http.get(url);
        }

        function logout() {
            var url = "/api/logout";
            return $http.post(url);
        }

        function login(username, password){
            var user = {"username": username, "password": password};
            var url = "/api/login";
            return $http.post(url, user);
        }

        function register(user) {
            var url = "/api/register";
            return $http.post(url, user);
        }

        function createUser(user) {
            var url = "/api/user";
            return $http.post(url, user);
        }

        function findUserById(userId) {
            var url = "/api/user/" + userId;
            return $http.get(url);
        }

        function findUserByUsername(username){
            var url = "/api/user?username=" + username;
            return $http.get(url);
        }

        function findUserByCredentials(username, password){
            var url = "/api/user?username="+username+"&password="+password;
            return $http.get(url);
        }

        function updateUser(userId, user) {
            var url = "/api/user/"+userId;
            return $http.put(url, user);
        }

        function deleteUser(userId) {
            var url = "/api/user/"+userId;
            return $http.delete(url);
        }
    }
})();
