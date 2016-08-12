// var adminURL = "http://104.199.151.75:84/";
var adminURL = "http://192.168.1.110:1337/";
var uploadurl = adminURL + "upload/";

var openTab = "http://wohlig.co.in/sfanodeback/#/showstudent";
// var openTab = "http://localhost:808/#/showstudent"

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Dashboard",
        classis: "active",
        anchor: "dashboard",
        icon: "dashboard",
        subnav: []
    }, {
        name: "Schools",
        classis: "active",
        anchor: "school",
        icon: "building",
        subnav: []
    }, {
        name: "Students",
        classis: "active",
        anchor: "student",
        icon: "users",
        subnav: []
    }, {
        name: "Sports List",
        classis: "active",
        anchor: "sportlist",
        icon: "users",
        subnav: []
    }, {
        name: "Sports",
        classis: "active",
        anchor: "sport",
        icon: "users",
        subnav: []
    }, {
        name: "Age Groups",
        classis: "active",
        anchor: "agegroup",
        icon: "users",
        subnav: []
    }, {
        name: "Sport Rule",
        classis: "active",
        anchor: "sportrule",
        icon: "users",
        subnav: []
    }, {
        name: "Teams",
        classis: "active",
        anchor: "team",
        icon: "users",
        subnav: []
    }];

    var currentYears = ["2015", "2016"];

    return {
        getnav: function() {
            return navigation;
        },
        getAllYears: function() {
            return currentYears;
        },
        loginAdmin: function(formData, callback) {
            $http({
                url: adminURL + 'admin/login',
                method: 'POST',
                data: formData
            }).success(callback);
        },
        getAllSportList: function(callback) {
            $http({
                url: adminURL + 'sportslist/getAll',
                method: 'POST'
            }).success(callback);
        },
        getAllSportListSchool: function(callback) {
            $http({
                url: adminURL + 'sportslist/getAll',
                method: 'POST'
            }).success(function(data) {
                var sportsListArr = [];
                if (data.value !== false) {
                    _.each(currentYears, function(n, key) {
                        var listArr = _.cloneDeep(data.data);
                        _.each(listArr, function(m) {
                            m.year = n;
                        });
                        sportsListArr.push(_.groupBy(listArr, "sporttype"));
                    });
                }
                callback(sportsListArr);
            });
        },
        getOneSportList: function(id, callback) {
            $http({
                url: adminURL + 'sportslist/getOne',
                method: 'POST',
                data: {
                    _id: id
                }
            }).success(callback);
        },
        saveSportList: function(formData, callback) {
            $http({
                url: adminURL + 'sportslist/saveData',
                method: 'POST',
                data: formData
            }).success(callback);
        },
        getAllSport: function(callback) {
            $http({
                url: adminURL + 'sport/getAll',
                method: 'POST'
            }).success(callback);
        },
        getOneSport: function(id, callback) {
            $http({
                url: adminURL + 'sport/getOne',
                method: 'POST',
                data: {
                    _id: id
                }
            }).success(callback);
        },
        saveSport: function(formData, callback) {
            $http({
                url: adminURL + 'sport/saveData',
                method: 'POST',
                data: formData
            }).success(callback);
        },
        getAllAgeGroup: function(callback) {
            $http({
                url: adminURL + 'agegroup/getAll',
                method: 'POST'
            }).success(callback);
        },
        getOneAgeGroup: function(id, callback) {
            $http({
                url: adminURL + 'agegroup/getOne',
                method: 'POST',
                data: {
                    _id: id
                }
            }).success(callback);
        },
        saveAgeGroup: function(formData, callback) {
            $http({
                url: adminURL + 'agegroup/saveData',
                method: 'POST',
                data: formData
            }).success(callback);
        },
        getFirstCategories: function(obj, callback) {
            $http({
                url: adminURL + 'firstcategory/findForDrop',
                method: 'POST',
                data: obj
            }).success(callback);
        },
        saveFirstCategory: function(obj, callback) {
            $http({
                url: adminURL + 'firstcategory/saveData',
                method: 'POST',
                data: obj
            }).success(callback);
        },
        getSecondCategories: function(obj, callback) {
            $http({
                url: adminURL + 'secondcategory/findForDrop',
                method: 'POST',
                data: obj
            }).success(callback);
        },
        saveSecondCategory: function(obj, callback) {
            $http({
                url: adminURL + 'secondcategory/saveData',
                method: 'POST',
                data: obj
            }).success(callback);
        },
        getAgeGroups: function(obj, callback) {
            $http({
                url: adminURL + 'agegroup/findForDrop',
                method: 'POST',
                data: obj
            }).success(callback);
        },
        getStudent: function(obj, callback) {
            $http({
                url: adminURL + 'student/findForDrop',
                method: 'POST',
                data: obj
            }).success(callback);
        },
        getTeam: function(obj, callback) {
          console.log(obj);
            $http({
                url: adminURL + 'student/findForDrop',
                method: 'POST',
                data: obj
            }).success(callback);
        },
        getAllAgeGroups: function(callback) {
            $http({
                url: adminURL + 'agegroup/getAll',
                method: 'POST'
            }).success(callback);
        },
        getLastId: function(callback) {
            $http({
                url: adminURL + 'school/getLastId',
                method: 'POST'
            }).success(callback);
        },
        saveSchool: function(obj, callback) {
            $http({
                url: adminURL + 'school/saveData',
                method: 'POST',
                data: obj
            }).success(callback);
        },
        getAllSchool: function(callback) {
            $http({
                url: adminURL + 'school/getAll',
                method: 'POST'
            }).success(callback);
        },
        getSchoolList: function(callback) {
            $http({
                url: adminURL + 'school/getSchool',
                method: 'POST'
            }).success(callback);
        },
        getOneSchool: function(id, callback) {
            $http({
                url: adminURL + 'school/getOne',
                method: 'POST',
                data: {
                    _id: id
                }
            }).success(callback);
        },
        getLastStudentId: function(callback) {
            $http({
                url: adminURL + 'student/getLastId',
                method: 'POST'
            }).success(callback);
        },
        getAllStudent: function(callback) {
            $http({
                url: adminURL + 'student/getAll',
                method: 'POST'
            }).success(callback);
        },
        getLimitedStudent: function(data, callback) {
            $http({
                url: adminURL + 'student/getLimited',
                method: 'POST',
                data: data
            }).success(callback);
        },
        getLimitedSchool: function(data, callback) {
            $http({
                url: adminURL + 'school/getLimited',
                method: 'POST',
                data: data
            }).success(callback);
        },
        getOneStudent: function(id, callback) {
            $http({
                url: adminURL + 'student/getOne',
                method: 'POST',
                data: {
                    _id: id
                }
            }).success(callback);
        },
        saveStudent: function(obj, callback) {
            $http({
                url: adminURL + 'student/saveData',
                method: 'POST',
                data: obj
            }).success(callback);
        },
        getSports: function(obj, callback) {
            $http({
                url: adminURL + 'sport/getSports',
                method: 'POST',
                data: obj
            }).success(callback);
        },
        hideSchool: function(data, callback) {
            $http({
                url: adminURL + 'school/hide',
                method: 'POST',
                data: data
            }).success(callback);
        },
        hideStudent: function(data, callback) {
            $http({
                url: adminURL + 'student/hide',
                method: 'POST',
                data: data
            }).success(callback);
        },
        deleteSportsList: function(id, callback) {
            $http({
                url: adminURL + 'sportslist/deleteData',
                method: 'POST',
                data: {
                    _id: id
                }
            }).success(callback);
        },
        deleteSport: function(id, callback) {
            $http({
                url: adminURL + 'sport/deleteData',
                method: 'POST',
                data: {
                    _id: id
                }
            }).success(callback);
        },
        deleteAgegroup: function(id, callback) {
            $http({
                url: adminURL + 'agegroup/deleteData',
                method: 'POST',
                data: {
                    _id: id
                }
            }).success(callback);
        },
        deleteSchool: function(callback) {
            $http({
                url: adminURL + 'school/deleteData',
                method: 'POST',
                data: {
                    _id: $.jStorage.get("deleteSchool")
                }
            }).success(callback);
        },
        deleteStudent: function(callback) {
            $http({
                url: adminURL + 'student/deleteData',
                method: 'POST',
                data: {
                    _id: $.jStorage.get("deleteStudent")
                }
            }).success(callback);
        },
        deleteSportRule: function(callback) {
            $http({
                url: adminURL + 'sportrule/deleteData',
                method: 'POST',
                data: {
                    _id: $.jStorage.get("deleteSportRule")
                }
            }).success(callback);
        },
        getStudentList: function(callback) {
            $http({
                url: adminURL + 'student/getStud',
                method: 'POST'
            }).success(callback);
        },
        getSchoolSports: function(year, schoolid, callback) {
            $http({
                url: adminURL + 'school/getSchoolSport',
                method: 'POST',
                data: {
                    year: year,
                    _id: schoolid
                }
            }).success(callback);
        },
        saveStudentSport: function(data, callback) {
            $http({
                url: adminURL + 'studentsport/saveData',
                method: 'POST',
                data: data
            }).success(callback);
        },
        getStudentSports: function(data, callback) {
            $http({
                url: adminURL + 'studentsport/getSports',
                method: 'POST',
                data: {
                    student: data
                }
            }).success(callback);
        },
        getOneStudentSport: function(data, callback) {
            $http({
                url: adminURL + 'studentsport/getOne',
                method: 'POST',
                data: {
                    _id: data
                }
            }).success(callback);
        },
        deleteStudentSport: function(callback) {
            $http({
                url: adminURL + 'studentsport/deleteData',
                method: 'POST',
                data: {
                    _id: $.jStorage.get("deleteStudentSport")
                }
            }).success(callback);
        },
        countStatic: function(callback) {
            $http({
                url: adminURL + 'config/countStatic',
                method: 'POST'
            }).success(callback);
        },
        countForDashboard: function(year, callback) {
            $http({
                url: adminURL + 'config/countForDashboard',
                method: 'POST',
                data: {
                    year: year
                }
            }).success(callback);
        },
        findStud: function(data, callback) {
            $http({
                url: adminURL + 'student/findStud',
                method: 'POST',
                data: data
            }).success(callback);
        },
        getAllSportRule: function(callback) {
            $http({
                url: adminURL + 'sportrule/getAll',
                method: 'POST'
            }).success(callback);
        },
        saveSportRule: function(data, callback) {
            $http({
                url: adminURL + 'sportrule/saveData',
                method: 'POST',
                data: data
            }).success(callback);
        },
        getOneSportRule: function(data, callback) {
            $http({
                url: adminURL + 'sportrule/getOne',
                method: 'POST',
                data: {
                    _id: data
                }
            }).success(callback);
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        }
    };
});
