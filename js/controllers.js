angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.select'])

.controller('headerctrl', function($scope, TemplateService, $state) {
    $scope.template = TemplateService;
    if (!$.jStorage.get("user")) {
        $state.go("login");
    }
    $scope.logout = function() {
        $.jStorage.flush();
        $state.go("login");
    }
})

.controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("login");
    $scope.menutitle = NavigationService.makeactive("Login");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.login = {};
    $scope.showError = false;
    $scope.loginAdmin = function() {
        NavigationService.loginAdmin($scope.login, function(data) {
            if (data.value == true) {
                $scope.showError = false;
                $.jStorage.set("user", data.data);
                $state.go("dashboard");
            } else {
                $scope.showError = true;
                $timeout(function() {
                    $scope.showError = false;
                }, 3000);
            }
        });
    }
})

.controller('DashboardCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("dashboard");
    $scope.menutitle = NavigationService.makeactive("Dashboard");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('schoolCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("school");
    $scope.menutitle = NavigationService.makeactive("Schools");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.template.type = 1;
})

.controller('createSchoolCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("createschool");
    $scope.menutitle = NavigationService.makeactive("Schools");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.template.type = 1;
    $scope.pageName = "Create School";
})

.controller('editSchoolCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("createschool");
    $scope.menutitle = NavigationService.makeactive("Schools");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.template.type = 2;
    $scope.subMenuList = [{
        title: "Back to School",
        redirect: "school"
    }, {
        title: "Whislist Folder",
        redirect: "edituser"
    }, {
        title: "Wishlist",
        redirect: "edituser"
    }, {
        title: "Artwork",
        redirect: "edituser"
    }, {
        title: "Cart",
        redirect: "edituser"
    }];
    $scope.pageName = "Edit School";
})

.controller('studentCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("student");
    $scope.menutitle = NavigationService.makeactive("Students");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.template.type = 1;
})

.controller('createStudentCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("createstudent");
    $scope.menutitle = NavigationService.makeactive("Students");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.template.type = 1;
    $scope.pageName = "Create Student";

    $scope.popup1 = {
        opened: false
    };

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.dateOptions = {
        maxDate: new Date()
    };

})

.controller('editStudentCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("createstudent");
    $scope.menutitle = NavigationService.makeactive("Students");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.template.type = 2;
    $scope.subMenuList = [{
        title: "Back to School",
        redirect: "student"
    }, {
        title: "Whislist Folder",
        redirect: "edituser"
    }, {
        title: "Wishlist",
        redirect: "edituser"
    }, {
        title: "Artwork",
        redirect: "edituser"
    }, {
        title: "Cart",
        redirect: "edituser"
    }];
    $scope.pageName = "Edit School";
})

.controller('sportCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("sport");
    $scope.menutitle = NavigationService.makeactive("Sports");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.template.type = 1;

    NavigationService.getAllSport(function(data) {
        console.log(data);
        if (data.value != false) {
            $scope.sports = data.data;
        }
    })

})

.controller('createSportCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("createsport");
    $scope.menutitle = NavigationService.makeactive("Sports");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.template.type = 1;
    $scope.pageName = "Create Sport";

    $scope.sport = {};

    $scope.saveSport = function() {
        console.log($scope.sport);
        NavigationService.saveSport($scope.sport, function(data) {
            console.log(data);
            if (data.value != false) {
                $state.go('sport');
            }
        })
    }

})

.controller('editSportCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("createsport");
    $scope.menutitle = NavigationService.makeactive("Sports");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.template.type = 1;
    $scope.pageName = "Edit Sport";

    $scope.sport = {};

    NavigationService.getOneSport($stateParams.id, function(data) {
        console.log(data);
        if (data.value != false) {
            $scope.sport = data.data;
        }
    })

    $scope.saveSport = function() {
        console.log($scope.sport);
        NavigationService.saveSport($scope.sport, function(data) {
            console.log(data);
            if (data.value != false) {
                $state.go('sport');
            }
        })
    }

})


.controller('ageGroupCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("agegroup");
    $scope.menutitle = NavigationService.makeactive("Age Groups");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.template.type = 1;

    NavigationService.getAllAgeGroup(function(data) {
        console.log(data);
        if (data.value != false) {
            $scope.ageGroups = data.data;
        }
    })

})

.controller('createAgeGroupCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("createagegroup");
    $scope.menutitle = NavigationService.makeactive("Age Groups");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.template.type = 1;
    $scope.pageName = "Create Age Group";

    $scope.agegroup = {};

    $scope.saveAgeGroup = function() {
        console.log($scope.agegroup);
        NavigationService.saveAgeGroup($scope.agegroup, function(data) {
            console.log(data);
            if (data.value != false) {
                $state.go('agegroup');
            }
        })
    }

})

.controller('editAgeGroupCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("createagegroup");
    $scope.menutitle = NavigationService.makeactive("Age Groups");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.template.type = 1;
    $scope.pageName = "Edit Age Group";

    $scope.agegroup = {};

    NavigationService.getOneAgeGroup($stateParams.id, function(data) {
        console.log(data);
        if (data.value != false) {
            $scope.agegroup = data.data;
        }
    })

    $scope.saveAgeGroup = function() {
        console.log($scope.agegroup);
        NavigationService.saveAgeGroup($scope.agegroup, function(data) {
            console.log(data);
            if (data.value != false) {
                $state.go('agegroup');
            }
        })
    }

})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
    };
});
