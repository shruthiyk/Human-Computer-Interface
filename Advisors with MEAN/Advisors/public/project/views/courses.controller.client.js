(function() {
    angular
        .module("CCISAdvisor")
        .controller("coursesControllerClient", coursesControllerClient);

    function coursesControllerClient($routeParams, $scope, $http, UserService, ThreadService,RecommendService, $location) {
        var vm = this;
        vm.userId = $routeParams.userId;
        //vm.setGradeData = setGradeData;

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
                                    T4:1

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
                                        T4:0

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
                                        T4:1

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
                                    T4:1

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
                                        T4:1

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
                                        T4:1

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
                                    T4:1

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
                                        T4:1

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
                                        T4:1

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
                                    T4:1

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
                                        T4:1

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
                                        T4:1

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
                                    T4:1

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
                                        T4:1

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
                                        T4:1

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
                                    T4:1

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
                                        T4:1

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
                                        T4:1

                                    }
                                ]
                            }

                        }
                    }
                )



        }
        init();


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
    }
})();