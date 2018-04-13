(function() {
    angular
        .module("CCISAdvisor")
        .controller("coursesControllerClient", coursesControllerClient);

    function coursesControllerClient($routeParams, $scope, $http, UserService, ThreadService,RecommendService, $location) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.clearFilter=clearFilter;
        vm.hasData=false;
        vm.hasData1=hasData1;
        //vm.setGradeData = setGradeData;
        //Filter 1 for types of courses


        $scope.filterOptions = {
            stores: [
                {id : 2, name : 'Show all', ID: 6 },
                {id : 3, name : 'Database', ID: 5 },
                {id : 4, name : 'Networks', ID: 4 },
                {id : 5, name : 'Software Engineering', ID: 3 },
                {id : 6, name : 'Security', ID: 2 },
                {id : 7, name : 'AI', ID: 1 }
            ]
        };

        $scope.filterItem = {
            store: $scope.filterOptions.stores[0]
        };

        $scope.customFilter = function (data) {
            if (data.ID === $scope.filterItem.store.ID) {
                return true;
            } else if ($scope.filterItem.store.ID === 6) {
                return true;
            } else {
                return false;
            }
        };


        //Filter 2 for hours
        $scope.filterOptions1 = {
            stores1: [
                {id : 2, name : 'Show all', ID: 99 },
                {id : 3, name : '4-8 Hours', ID: 8 },
                {id : 4, name : '8-12 Hours', ID: 12 },
                {id : 5, name : '12-16 hours', ID: 16 }
            ]
        };

        $scope.filterItem1 = {
            store1: $scope.filterOptions1.stores1[0]
        };

        $scope.customFilter1 = function (data) {
            if (data.Hours <= $scope.filterItem1.store1.ID && data.Hours>=(($scope.filterItem1.store1.ID)-4)) {
                return true;
            } else if ($scope.filterItem1.store1.ID === 99) {
                return true;
            } else {
                return false;
            }
        };


        function init() {

            console.log("courses page"+vm.userId);
            UserService
                .findUserById(vm.userId)
                .then(
                    function(response){
                        vm.user = response.data;
                    }
                );
            RecommendService
                .fetchRecommend(vm.userId)
                .then(
                    function(response){
                        vm.recommendData=response.data;
                        console.log("Received data::"+JSON.stringify(vm.recommendData));
                        if(vm.recommendData.length>0)
                        {
                            vm.hasData=true;
                            if(vm.recommendData[0].project_like==="Strong_agree"||
                                vm.recommendData[0].project_like==="Agree")
                            {
                                vm.courseData=[{
                                    Course:"Map reduce0",
                                    Professor:"Prof Jon",
                                    Lecture_Hours:"5:00pm-7:00pm",
                                    Location:"Snell Library 125",
                                    Type:"Database,Airtificial intelligence",
                                    Hours:8,
                                    T1:55,
                                    T2:35,
                                    T3:9,
                                    T4:1,
                                    ID:5

                                },
                                    {
                                        Course:"Machine learning0",
                                        Professor:"Prof Jon",
                                        Lecture_Hours:"5:00pm-7:00pm",
                                        Location:"Snell Library 135",
                                        Type:"Networks",
                                        Hours:12,
                                        T1:70,
                                        T2:30,
                                        T3:0,
                                        T4:0,
                                        ID:1

                                    },
                                    {
                                        Course:"Cloud computing0",
                                        Professor:"Prof Jon",
                                        Lecture_Hours:"5:00pm-7:00pm",
                                        Location:"Snell Library 155",
                                        Type:"Software Engineering,Database",
                                        Hours:10,
                                        T1:55,
                                        T2:35,
                                        T3:9,
                                        T4:1,
                                        ID:5

                                    }
                                ]

                            }
                            else if(vm.recommendData[0].team_like==="Strong_agree"||
                                vm.recommendData[0].team_like==="Agree")
                            {

                                vm.courseData=[{
                                    Course:"Map reduce",
                                    Professor:"Prof Jon",
                                    Lecture_Hours:"5:00pm-7:00pm",
                                    Location:"Snell Library 125",
                                    Type:"Database,Airtificial intelligence",
                                    Hours:8,
                                    T1:55,
                                    T2:35,
                                    T3:9,
                                    T4:1,
                                    ID:5

                                },
                                    {
                                        Course:"Machine learning",
                                        Professor:"Prof Jon",
                                        Lecture_Hours:"5:00pm-7:00pm",
                                        Location:"Snell Library 135",
                                        Type:"Networks",
                                        Hours:12,
                                        T1:55,
                                        T2:35,
                                        T3:9,
                                        T4:1,
                                        ID:1

                                    },
                                    {
                                        Course:"Cloud computing",
                                        Professor:"Prof Jon",
                                        Lecture_Hours:"5:00pm-7:00pm",
                                        Location:"Snell Library 155",
                                        Type:"Software Engineering,Database",
                                        Hours:10,
                                        T1:55,
                                        T2:35,
                                        T3:9,
                                        T4:1,
                                        ID:5

                                    }
                                ]
                            }
                            else if(vm.recommendData[0].exam_or_assignment==="Strong_agree"||
                                vm.recommendData[0].exam_or_assignment==="Agree")
                            {

                                vm.courseData=[{
                                    Course:"Map reduce2",
                                    Professor:"Prof Jon",
                                    Lecture_Hours:"5:00pm-7:00pm",
                                    Location:"Snell Library 125",
                                    Type:"Database,Airtificial intelligence",
                                    Hours:8,
                                    T1:55,
                                    T2:35,
                                    T3:9,
                                    T4:1,
                                    ID:5

                                },
                                    {
                                        Course:"Machine learning2",
                                        Professor:"Prof Jon",
                                        Lecture_Hours:"5:00pm-7:00pm",
                                        Location:"Snell Library 135",
                                        Type:"Networks",
                                        Hours:12,
                                        T1:55,
                                        T2:35,
                                        T3:9,
                                        T4:1,
                                        ID:5

                                    },
                                    {
                                        Course:"Cloud computing2",
                                        Professor:"Prof Jon",
                                        Lecture_Hours:"5:00pm-7:00pm",
                                        Location:"Snell Library 155",
                                        Type:"Software Engineering,Database",
                                        Hours:10,
                                        T1:55,
                                        T2:35,
                                        T3:9,
                                        T4:1,
                                        ID:5

                                    }
                                ]
                            }
                            else if(vm.recommendData[0].textbook_like==="Strong_agree"||
                                vm.recommendData[0].textbook_like==="Agree")
                            {

                                vm.courseData=[{
                                    Course:"Map reduce3",
                                    Professor:"Prof Jon",
                                    Lecture_Hours:"5:00pm-7:00pm",
                                    Location:"Snell Library 125",
                                    Type:"Database,Airtificial intelligence",
                                    Hours:8,
                                    T1:55,
                                    T2:35,
                                    T3:9,
                                    T4:1,
                                    ID:5

                                },
                                    {
                                        Course:"Machine learning3",
                                        Professor:"Prof Jon",
                                        Lecture_Hours:"5:00pm-7:00pm",
                                        Location:"Snell Library 135",
                                        Type:"Networks",
                                        Hours:12,
                                        T1:55,
                                        T2:35,
                                        T3:9,
                                        T4:1,
                                        ID:5

                                    },
                                    {
                                        Course:"Cloud computing3",
                                        Professor:"Prof Jon",
                                        Lecture_Hours:"5:00pm-7:00pm",
                                        Location:"Snell Library 155",
                                        Type:"Software Engineering,Database",
                                        Hours:10,
                                        T1:55,
                                        T2:35,
                                        T3:9,
                                        T4:1,
                                        ID:5

                                    }
                                ]
                            }
                            else if(vm.recommendData[0].research_paper==="Strong_agree"||
                                vm.recommendData[0].research_paper==="Agree")
                            {
                                vm.courseData=[{
                                    Course:"Map reduce4",
                                    Professor:"Prof Jon",
                                    Lecture_Hours:"5:00pm-7:00pm",
                                    Location:"Snell Library 125",
                                    Type:"Database,Airtificial intelligence",
                                    Hours:8,
                                    T1:55,
                                    T2:35,
                                    T3:9,
                                    T4:1,
                                    ID:5

                                },
                                    {
                                        Course:"Machine learning4",
                                        Professor:"Prof Jon",
                                        Lecture_Hours:"5:00pm-7:00pm",
                                        Location:"Snell Library 135",
                                        Type:"Networks",
                                        Hours:12,
                                        T1:55,
                                        T2:35,
                                        T3:9,
                                        T4:1,
                                        ID:5

                                    },
                                    {
                                        Course:"Cloud computing4",
                                        Professor:"Prof Jon",
                                        Lecture_Hours:"5:00pm-7:00pm",
                                        Location:"Snell Library 155",
                                        Type:"Software Engineering,Database",
                                        Hours:10,
                                        T1:55,
                                        T2:35,
                                        T3:9,
                                        T4:1,
                                        ID:5

                                    }
                                ]

                            }
                            else{
                                vm.courseData=[{
                                    Course:"Map reduce5",
                                    Professor:"Prof Jon",
                                    Lecture_Hours:"5:00pm-7:00pm",
                                    Location:"Snell Library 125",
                                    Type:"Database,Airtificial intelligence",
                                    Hours:8,
                                    T1:55,
                                    T2:35,
                                    T3:9,
                                    T4:1,
                                    ID:5

                                },
                                    {
                                        Course:"Machine learning5",
                                        Professor:"Prof Jon",
                                        Lecture_Hours:"5:00pm-7:00pm",
                                        Location:"Snell Library 135",
                                        Type:"Networks",
                                        Hours:12,
                                        T1:55,
                                        T2:35,
                                        T3:9,
                                        T4:1,
                                        ID:1

                                    },
                                    {
                                        Course:"Cloud computing5",
                                        Professor:"Prof Jon",
                                        Lecture_Hours:"5:00pm-7:00pm",
                                        Location:"Snell Library 155",
                                        Type:"Software Engineering,Database",
                                        Hours:10,
                                        T1:55,
                                        T2:35,
                                        T3:9,
                                        T4:1,
                                        ID:5

                                    }
                                ]
                            }

                        }
                    }
                )



        }
        init();


        function clearFilter(){

            console.log("xxx"+$scope.filterOptions.stores[0]);
            $scope.filterItem = {
                store: $scope.filterOptions.stores[0]
            };
            //store: $scope.filterOptions.stores[0]
            $scope.filterItem1 = {
                store1: $scope.filterOptions1.stores1[0]
            };


        }
        function setGradeData(){

            var recdata = {"project_like": vm.result,
                "team_like": vm.result2,
                "exams_or_assignments": vm.result3,
                "research_paper": vm.result4};
            console.log("Pranav:::"+ JSON.stringify(recdata));
            RecommendService
                .createRecommend(vm.userId, recdata)
                .then(
                    function (response) {
                        $location.url("/user/" + vm.userId+"/courses");
                    },
                    function (error) {
                        vm.error = error.data;
                    }
                )


        }
        function hasData1() {
            RecommendService
                .fetchRecommend(vm.userId)
                .then(
                    function(response){
                        vm.recommendData=response.data;
                        if(vm.recommendData.length<=0){
                            $location.url("/user/"+ vm.userId+"/questionnare" );
                        }else
                        {
                            $location.url("/user/"+ vm.userId+"/courses" );
                        }

                    })

        }
    }
})();